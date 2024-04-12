$(document).ready(function() {
    $('form-check-input').change(function() {
        var trickId = $(this).attr('id').split('-')[1]; //extracts trick ID from checkboxes
        var isChecked = $(this).prop('checked');
        console.log("trick id", trickId);
        console.log("is checked", isChecked);

        $.ajax({
            method: 'POST',
            url: '/dashboard',
            data: {
                trickID: trickId,
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

    const saveBtn = document.getElementById('saveBtn');
    

    saveBtn.addEventListener('click', async () => {
        const checkboxes = document.querySelectorAll('.trick-checkbox');
        console.log("saved");
        const trickStatus = [];
        checkboxes.forEach(checkbox => {
            console.log("checkbox value ", checkbox.value);
            trickStatus.push({
                trickId: checkbox.value,
                isChecked: checkbox.checked
            });
        });
        
        try {
            const response = await fetch('/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(trickStatus)
            });

            if (response.ok) {
                alert('Trick status saved successfully');
            } else {
                throw new Error('Failed to save trick status');
            }
        } catch (error) {
            console.error('Error saving trick status:', error);
        }
    });


//reggie add: front-end logic for trick counter
// $(document).ready(function() {
//     function fetchLearnedTricksCount() {
//         $.ajax({
//             method: 'GET',
//             url: 'dashboard', 
//             success: function(response) {
//                 $('#learnedTricksCount').text(response.numberOfTricksLearned)
//             },
//             error: function(err) {
//                 console.error('Error fetching learned tricks', err);
//             }
//         });
//     };
// });