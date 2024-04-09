$(document).ready(function() {
    $('form-check-input').change(function() {
        var trickId = $(this).attr('id').split('-')[1]; //extracts trick ID from checkboxes
        var isChecked = $(this).prop('checked');

        $.ajax({
            method: 'POST',
            url: '/dashboard',
            data: {
                trickID: trickID,
                isChecked: isChecked
            },
            success: function(response) {
                console.log('Trick status succesfully updated');
                fetchLearnedTricksCount();
            },
            error: function(err) {
                console.error('Error updating trick status', err);
            }
        });
    });
});

//reggie add: front-end logic for trick counter
$(document).ready(function() {
    function fetchLearnedTricksCount() {
        $.ajax({
            method: 'GET',
            url: 'dashboard', 
            success: function(response) {
                $('#learnedTricksCount').text(response.numberOfTricksLearned)
            },
            error: function(err) {
                console.error('Error fetching learned tricks', err);
            }
        });
    };
});