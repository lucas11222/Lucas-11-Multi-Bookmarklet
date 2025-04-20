javascript: (function () {
  function showMenu() {
    var choice = prompt(
      "Lucas 11 Multi-Bookmarklet \n\n" +
        "CalcString 🖩 (1️⃣)\n" +
        "JTBC (Javascript To Bookmarklet Compiler) 📋 (2️⃣)\n" +
        "Mini-JTBC 📋 (3️⃣)\n" +
        "Mini-JTBC 📋 (4️⃣)\n" +
        "Close 🚪 (5️⃣ or Cancell) \n\n" +
        "Mysterious option ☠️ (6️⃣) \n\n" +
        "Select an tool with numbers."
    );
    if (choice === null) {
      alert("Bye! Made with 💖 by Lucas11.");
      return;
    }
    switch (choice) {
      case "1":
        CalcuString();
        break;
      case "2":
        JTBC();
        break;
      case "3":
        MiniJTBC();
        break;
      case "4":
        alert(
          "Credits \n Made by Lucas11 for hacklet. \n Hacklet made by PianoMan0. \n  \n\n Thanks for using this multi-tool!"
        );
        showMenu();
        break;
      case "5":
        alert("Bye! Made with 💖 by Lucas11.");
        break;
      case "6":
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        break;
      default:
        alert(
          "404. Put a number for going into a program. (Example: 1 = CalcuString)"
        );
        showMenu();
        break;
    }
  }

  function CalcuString() {
    var isallowtocontinue = true;

    while (isallowtocontinue) {
      alert("CalcString, An sum of strings in your bookmarklet.");
      var count = parseInt(prompt("How many strings you wanna to sum?", "2"));
      if (isNaN(count) || count < 1) {
        alert("Put a valid number.");
        continue;
      }

      var result = "";
      for (var i = 0; i < count; i++) {
        var input = prompt("In phrase #" + (i + 1), "");
        result += input + (i < count - 1 ? " " : "");
      }

      alert("Sum of phrases: " + result);

      var lowerResult = result.toLowerCase().trim();
      if (lowerResult === "congreation jumpscare") {
        window.location.href = "https://youtu.be/k3ebBTBeUTg?t=97";
      } else if (lowerResult === "Rick roll") {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      } else if (lowerResult === "Lucas 11") {
        alert("hello - From Lucas11");
      } else if (lowerResult === "Hello World") {
        window.location.href = "https://www.helloworld.org/";
      }

      isallowtocontinue = confirm("Want to continue?");
    }

    showMenu();
  }
  function JTBC() {
    alert("JTBC, An fast compiler for Bookmarklet. In a Bookmarklet.");
    var code = prompt("Put all the javascript here.");
    if (code === null) {
      alert("Cancelling...");
      return showMenu();
    }
    var result = "javascript:(function() {" + code + "})();";
    alert(result);
    navigator.clipboard.writeText(result);
    alert("Copied to your Clipboard!");

    var run = confirm("Do you want to execute the code?");
    if (!run) {
      alert("Leaving the compiler...");
      return showMenu();
    }

    try {
      new Function(code)();
    } catch (e) {
      alert("Error executing your code: " + e.message);
    }
  }
  function MiniJTBC() {
    alert("Mini-JTBC, Just runs javascript.");
    var code = prompt("Put all the javascript here.");
    if (code === null) {
      alert("Cancelling...");
      return showMenu();
    }
    try {
      new Function(code)();
    } catch (e) {
      alert("Error executing your code: " + e.message);
    }
  }
  showMenu();
})();
