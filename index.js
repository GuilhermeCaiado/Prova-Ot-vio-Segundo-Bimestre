document.getElementById("addGradeInput").addEventListener("click", function() {
    var gradeInputs = document.getElementById("gradeInputs");
    var lastGradeInput = gradeInputs.lastElementChild;
    var newGradeInput = lastGradeInput.cloneNode(true);
    var currentNumber = document.querySelectorAll('.gradeInput').length + 1;
    newGradeInput.querySelector("label").textContent = "Nota " + currentNumber + ":";
    newGradeInput.querySelector("input").value = "";
    gradeInputs.appendChild(newGradeInput);
});

document.getElementById("gradesForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var grades = document.querySelectorAll(".grade");
    var totalGrades = 0;

    grades.forEach(function(grade) {
        totalGrades += parseFloat(grade.value);
    });

    var totalAverage = totalGrades / grades.length;
    var situation = totalAverage >= 5.1 ? "Aprovado" : "Reprovado";

    var newRow = document.createElement("tr");
    newRow.innerHTML = "<td>" + name + "</td><td>" + id + "</td><td>" + totalAverage.toFixed(1) + "</td><td>" + grades.length + "</td><td>" + situation + "</td><td><button class='removeGradeButton'>Remover</button></td>";

    document.getElementById("resultsBody").appendChild(newRow);

    document.getElementById("resultContainer").classList.remove("hidden");
});

document.getElementById("resultsBody").addEventListener("click", function(event) {
    if (event.target.classList.contains("removeGradeButton")) {
        event.target.closest("tr").remove();
    }
});

