document.getElementById("museo-select").addEventListener("change", function() {
    const selectUrl = this.value;

    if (selectUrl) {
        window.location.href = selectUrl; 
    }
});