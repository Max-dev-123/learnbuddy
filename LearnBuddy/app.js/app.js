{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const teacherSettings = \{ maxHintsBeforeAnswer: 6 \};\
\
const lessons = [\
  \{\
    id: "eq1",\
    title: "One-step Equations (Long Lesson)",\
    difficulty: 2,\
    time: "25\'9635 min",\
    skills: "Undo one operation",\
    goal: "Solve one-step equations like x + 7 = 19 and check your answer.",\
    steps: [\
      "Find the variable (like x).",\
      "Decide what operation is happening to x (plus, minus, times, divide).",\
      "Undo that operation on BOTH sides of the equation.",\
      "Simplify.",\
      "Check by substituting your answer back into the original equation.",\
      "Explain your steps in a sentence."\
    ],\
    practice: "Solve: x \uc0\u8722  9 = 14",\
    hints: [\
      "What operation is happening to x here: subtract 9 or add 9?",\
      "To undo \'93\uc0\u8722  9\'94, do the opposite: add 9.",\
      "Add 9 to BOTH sides: x \uc0\u8722  9 + 9 = 14 + 9.",\
      "What does \uc0\u8722 9 + 9 become?",\
      "Now compute 14 + 9.",\
      "Check: does your x value make x \uc0\u8722  9 equal 14?"\
    ],\
    finalAnswer: "Add 9 to both sides: x = 23. Check: 23 \uc0\u8722  9 = 14 \u9989 ",\
    coach: (msg) => \{\
      const t = msg.toLowerCase();\
      if (t.includes("subtract 9")) return "Careful\'97if the equation is x \uc0\u8722  9 = 14, what\'92s the opposite of \u8722 9?";\
      if (t.includes("add 9")) return "Yes. What is 14 + 9?";\
      if (t.includes("23")) return "Nice. Now check: 23 \uc0\u8722  9 = ?";\
      if (t.includes("14")) return "Great check! Explain: what did you do to both sides first?";\
      return "Tell me: what operation is being done to x (\uc0\u8722 9, +9, \'d7, or \'f7)?";\
    \}\
  \},\
  \{\
    id: "eq2",\
    title: "Two-step Equations (Long Lesson)",\
    difficulty: 3,\
    time: "30\'9640 min",\
    skills: "Undo two operations",\
    goal: "Solve equations like 4x + 6 = 30 using reverse operations and checking.",\
    steps: [\
      "Circle the term with x (like 4x).",\
      "Undo addition/subtraction first.",\
      "Then undo multiplication/division.",\
      "Write one line per step so it\'92s easy to follow.",\
      "Check your answer by substituting back in.",\
      "Try a second question to confirm you can repeat the process."\
    ],\
    practice: "Solve: 4x + 6 = 30",\
    hints: [\
      "What should you undo first: +6 or \'d74?",\
      "Undo +6 by subtracting 6 from BOTH sides.",\
      "30 \uc0\u8722  6 = 24, so now you have 4x = 24.",\
      "Now undo \'d74 by dividing BOTH sides by 4.",\
      "24 \'f7 4 = 6, so x = 6.",\
      "Check: does 4(6) + 6 equal 30?"\
    ],\
    finalAnswer: "Subtract 6: 4x = 24. Divide by 4: x = 6. Check: 4(6)+6=30 \uc0\u9989 ",\
    coach: (msg) => \{\
      const t = msg.toLowerCase();\
      if (t.includes("divide first")) return "Try undoing the +6 first. What\'92s the opposite of +6?";\
      if (t.includes("subtract 6")) return "Good\'97what is 30 \uc0\u8722  6?";\
      if (t.includes("24")) return "Nice. Now you have 4x = 24. What\'92s next?";\
      if (t.includes("divide by 4")) return "Yes\'97what is 24 \'f7 4?";\
      if (t.includes("6")) return "If x = 6, do the check: 4(6)+6 = ?";\
      return "What\'92s your first move: subtract 6 or divide by 4? (Pick one.)";\
    \}\
  \},\
  \{\
    id: "eq3",\
    title: "Multi-step Equations (Long Lesson)",\
    difficulty: 4,\
    time: "40\'9655 min",\
    skills: "Combine like terms, then solve",\
    goal: "Solve equations like 2x + 5x \uc0\u8722  4 = 24 by combining like terms first.",\
    steps: [\
      "Simplify each side: combine like terms (x terms with x terms, numbers with numbers).",\
      "If there are parentheses, expand them (distribute) first.",\
      "After simplifying, solve using the two-step equation method.",\
      "Keep your work lined up to avoid mistakes.",\
      "Check your answer in the ORIGINAL equation (not the simplified one only).",\
      "Explain where each number came from."\
    ],\
    practice: "Solve: 2x + 5x \uc0\u8722  4 = 24",\
    hints: [\
      "Which terms are like terms: 2x and 5x, or 5x and \uc0\u8722 4?",\
      "Combine 2x + 5x to make a single term.",\
      "Now you should have something like 7x \uc0\u8722  4 = 24.",\
      "Undo \uc0\u8722 4 by adding 4 to both sides: 24 + 4 = 28.",\
      "Now you have 7x = 28. Undo \'d77 by dividing by 7.",\
      "28 \'f7 7 = 4. Check in the original: 2(4)+5(4)\uc0\u8722 4 = ?"\
    ],\
    finalAnswer: "Combine: 2x+5x=7x \uc0\u8594  7x\u8722 4=24. Add 4: 7x=28. Divide by 7: x=4. Check: 8+20\u8722 4=24 \u9989 ",\
    coach: (msg) => \{\
      const t = msg.toLowerCase();\
      if (t.includes("7x - 4")) return "Great simplification. What should you do to undo \uc0\u8722 4?";\
      if (t.includes("add 4")) return "Yes\'97what is 24 + 4?";\
      if (t.includes("28")) return "Nice. Now you have 7x = 28. What next?";\
      if (t.includes("divide by 7")) return "Good\'97what is 28 \'f7 7?";\
      if (t.includes("4")) return "If x = 4, do the full check: 2(4)+5(4)\uc0\u8722 4 = ?";\
      return "First step: can you combine 2x + 5x? What do you get?";\
    \}\
  \}\
];\
\
// Only run on lessons.html (where these elements exist)\
const lessonSelect = document.getElementById("lessonSelect");\
if (lessonSelect) \{\
  const els = \{\
    lessonSelect,\
    difficultyBadge: document.getElementById("difficultyBadge"),\
    goalBox: document.getElementById("goalBox"),\
    timePill: document.getElementById("timePill"),\
    skillsPill: document.getElementById("skillsPill"),\
    stepsList: document.getElementById("stepsList"),\
    practiceBox: document.getElementById("practiceBox"),\
    hintBtn: document.getElementById("hintBtn"),\
    resetBtn: document.getElementById("resetBtn"),\
    chat: document.getElementById("chat"),\
    kidInput: document.getElementById("kidInput"),\
    sendBtn: document.getElementById("sendBtn"),\
  \};\
\
  let current = lessons[0];\
  let hintCount = 0;\
\
  function addAI(text)\{\
    const div = document.createElement("div");\
    div.className = "msg ai";\
    div.textContent = text;\
    els.chat.appendChild(div);\
    els.chat.scrollTop = els.chat.scrollHeight;\
  \}\
\
  function addKid(text)\{\
    const div = document.createElement("div");\
    div.className = "msg kid";\
    div.textContent = text;\
    els.chat.appendChild(div);\
    els.chat.scrollTop = els.chat.scrollHeight;\
  \}\
\
  function resetChat(silent)\{\
    els.chat.innerHTML = "";\
    hintCount = 0;\
    if (!silent) addAI("Chat reset. Start by telling me your first step.");\
  \}\
\
  function loadLesson()\{\
    const id = els.lessonSelect.value;\
    current = lessons.find(l => l.id === id) || lessons[0];\
    hintCount = 0;\
\
    els.goalBox.textContent = current.goal;\
    els.timePill.textContent = `Time: $\{current.time\}`;\
    els.skillsPill.textContent = `Skills: $\{current.skills\}`;\
\
    const diff = "\uc0\u9733 ".repeat(current.difficulty) + "\u9734 ".repeat(5-current.difficulty);\
    els.difficultyBadge.textContent = `Difficulty: $\{diff\}`;\
\
    els.stepsList.innerHTML = current.steps.map(s => `<li>$\{s\}</li>`).join("");\
    els.practiceBox.textContent = current.practice;\
\
    resetChat(true);\
    addAI(`New lesson loaded: "$\{current.title\}". What\'92s your first step?`);\
  \}\
\
  function teacherHint()\{\
    const hints = current.hints || [];\
    if (hints.length === 0)\{\
      addAI("Hint: Tell me what step you tried so far, and I\'92ll guide you.");\
      return;\
    \}\
\
    const i = Math.min(hintCount, hints.length - 1);\
    addAI(`Hint $\{hintCount + 1\}: $\{hints[i]\}`);\
    hintCount++;\
\
    if (hintCount >= teacherSettings.maxHintsBeforeAnswer)\{\
      addAI("You\'92ve used lots of hints. If you want, type: SHOW ANSWER");\
    \}\
  \}\
\
  function sendKid()\{\
    const msg = (els.kidInput.value || "").trim();\
    if(!msg) return;\
    els.kidInput.value = "";\
\
    addKid(msg);\
    const t = msg.toLowerCase();\
\
    if (t === "show answer" || t === "show the answer")\{\
      if (hintCount >= teacherSettings.maxHintsBeforeAnswer)\{\
        addAI("Final answer (with steps): " + (current.finalAnswer || "No finalAnswer found for this lesson."));\
      \} else \{\
        addAI(`Not yet\'97try a few more hints first. You\'92ve used $\{hintCount\}/$\{teacherSettings.maxHintsBeforeAnswer\}.`);\
      \}\
      return;\
    \}\
\
    addAI(current.coach ? current.coach(msg) : "Tell me what you tried so far.");\
  \}\
\
  // Wire up UI\
  els.lessonSelect.innerHTML = lessons.map(l => `<option value="$\{l.id\}">$\{l.title\}</option>`).join("");\
  els.lessonSelect.addEventListener("change", loadLesson);\
  els.hintBtn.addEventListener("click", teacherHint);\
  els.resetBtn.addEventListener("click", () => resetChat(false));\
  els.sendBtn.addEventListener("click", sendKid);\
  els.kidInput.addEventListener("keydown", (e) => \{ if (e.key === "Enter") sendKid(); \});\
\
  loadLesson();\
\}}