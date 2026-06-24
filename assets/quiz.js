/*
 * quiz.js — reusable retrieval-practice widget for the Business Engine course.
 *
 * No dependencies. Drop this markup anywhere and include the script once:
 *
 *   <div class="quiz" data-quiz>
 *     <p class="q">Revenue is best described as…</p>
 *     <ul class="opts">
 *       <li data-correct>money received from selling goods or services</li>
 *       <li>profit kept after every cost is subtracted out</li>
 *       <li>cash the business holds in the bank right now</li>
 *     </ul>
 *     <p class="explain">Revenue sits at the very top of the funnel — before any cost.</p>
 *   </div>
 *
 * Mark exactly one <li> with data-correct. Order is randomised on load so the
 * correct answer is never in a predictable position. The optional .explain
 * paragraph is revealed after the learner answers.
 *
 * Styling lives here so any lesson that links quiz.js looks consistent.
 */
(function () {
  "use strict";

  var CSS = `
  .quiz {
    margin: 1.6rem 0;
    padding: 1.2rem 1.3rem;
    border: 1px solid var(--rule, #e3ded2);
    border-radius: 8px;
    background: #fff;
  }
  .quiz .q { font-weight: 600; margin: 0 0 0.9rem; }
  .quiz .opts { list-style: none; margin: 0; padding: 0; }
  .quiz .opts li {
    border: 1px solid var(--rule, #e3ded2);
    border-radius: 6px;
    padding: 0.6rem 0.85rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: background 0.12s, border-color 0.12s;
    font-size: 0.95rem;
  }
  .quiz .opts li:hover { background: #f4f1e8; }
  .quiz .opts li.correct {
    border-color: var(--accent, #1f6f54);
    background: var(--accent-soft, #e7f1ec);
    cursor: default;
  }
  .quiz .opts li.wrong {
    border-color: #b3402f;
    background: #fbeae7;
    cursor: default;
  }
  .quiz .opts li.locked { cursor: default; }
  .quiz .opts li.correct::after { content: "  ✓"; color: var(--accent, #1f6f54); font-weight: 700; }
  .quiz .opts li.wrong::after { content: "  ✗"; color: #b3402f; font-weight: 700; }
  .quiz .explain {
    margin: 0.9rem 0 0;
    padding-top: 0.8rem;
    border-top: 1px dashed var(--rule, #e3ded2);
    font-size: 0.9rem;
    color: var(--ink-soft, #4a4a4a);
    display: none;
  }
  .quiz.answered .explain { display: block; }
  `;

  function injectStyle() {
    if (document.getElementById("quiz-style")) return;
    var s = document.createElement("style");
    s.id = "quiz-style";
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function shuffle(nodes) {
    for (var i = nodes.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      nodes[i].parentNode.insertBefore(nodes[j], nodes[i].nextSibling);
      var tmp = nodes[i];
      nodes[i] = nodes[j];
      nodes[j] = tmp;
    }
  }

  function wire(quiz) {
    var opts = Array.prototype.slice.call(quiz.querySelectorAll(".opts li"));
    shuffle(opts);
    opts.forEach(function (li) {
      li.addEventListener("click", function () {
        if (quiz.classList.contains("answered")) return;
        quiz.classList.add("answered");
        opts.forEach(function (o) {
          o.classList.add("locked");
          if (o.hasAttribute("data-correct")) o.classList.add("correct");
        });
        if (!li.hasAttribute("data-correct")) li.classList.add("wrong");
      });
    });
  }

  function init() {
    injectStyle();
    document.querySelectorAll(".quiz[data-quiz]").forEach(wire);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
