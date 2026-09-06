function showForm() {
    let type = document.getElementById("userType").value;

    document.querySelectorAll(".role-form").forEach(form => {
        form.style.display = "none";
    });

    if (type === "admin") {
        document.getElementById("adminForm").style.display = "block";
    } 
    else if (type === "manager") {
        document.getElementById("managerForm").style.display = "block";
    } 
    else if (type === "resident") {
        document.getElementById("residentForm").style.display = "block";
    } 
    else if (type === "tenant") {
        document.getElementById("tenantForm").style.display = "block";
    }
}