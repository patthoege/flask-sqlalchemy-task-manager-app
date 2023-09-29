document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);
});


document.addEventListener('DOMContentLoaded', function() {
    // Get all modal elements
    var modals = document.querySelectorAll('.modal');

    // Initialize modals
    M.Modal.init(modals);

    // Get all delete buttons
    var deleteButtons = document.querySelectorAll('.delete-button');

    function deleteButtons(categoryId) {
        // Attach click event to the "Yes" button inside the modal
        var confirmDeleteButton = document.getElementById('confirm-delete-' + categoryId);
        confirmDeleteButton.addEventListener('click', function() {
            // Make an AJAX request to delete the category
            var xhr = new XMLHttpRequest();
            xhr.open('DELETE', '/delete_category/' + categoryId, true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    // Category deleted successfully, handle this as needed (e.g., redirect or reload the page)
                    window.location.reload();
                } else {
                    // Error handling
                    console.error('Error deleting category. Status:', xhr.status);
                }
            };
            xhr.send();
        });
    }
});

