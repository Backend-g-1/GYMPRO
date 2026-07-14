import { useEffect, useRef } from "react";

/* ── Interactive particle network ──
 *   Nodes connected by lines, repelled by mouse cursor.
 *   Canvas-only — zero DOM, maximum perf.
 */

const NODE_COUNT = 45;
const CONNECT_DIST = 150;
const REPEL_RADIUS = 120;
const REPEL_FORCE = 1.8;
const RETURN_SPEED = 0.04;
const NODE_RADIUS = 1.8;

const InteractiveNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animId;
    let mouseX = -9999;
    let mouseY = -9999;
    let w, h;

    /* ── Nodes ── */
    const nodes = Array.from({ length: NODE_COUNT }, () => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      return {
        ox: x, // original x
        oy: y, // original y
        x,
        y,
        vx: 0,
        vy: 0,
      };
    });

    /* ── Resize ── */
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    /* ── Mouse ── */
    const onMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    window.addEventListener("mousemove", onMouse);
    document.addEventListener("mouseleave", onLeave);

    /* ── Animation ── */
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      /* Update positions */
      for (const n of nodes) {
        const dx = n.ox - n.x;
        const dy = n.oy - n.y;

        /* Return to origin */
        n.vx += dx * RETURN_SPEED;
        n.vy += dy * RETURN_SPEED;

        /* Repel from mouse */
        const mdx = n.x - mouseX;
        const mdy = n.y - mouseY;
        const dist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS * REPEL_FORCE;
          const normX = mdx / dist;
          const normY = mdy / dist;

          n.vx += normX * force;
          n.vy += normY * force;
        }

        /* Damping */
        n.vx *= 0.85;
        n.vy *= 0.85;

        n.x += n.vx;
        n.y += n.vy;
      }

      /* Draw lines between nearby nodes */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = dx * dx + dy * dy;

          if (dist < CONNECT_DIST * CONNECT_DIST) {
            const alpha = (1 - Math.sqrt(dist) / CONNECT_DIST) * 0.35;

            ctx.strokeStyle = `rgba(0, 230, 118, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      /* Draw nodes */
      ctx.fillStyle = "rgba(0, 230, 118, 0.4)";

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, NODE_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
};

export default InteractiveNetwork;
