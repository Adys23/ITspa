import $ from 'jquery';

export const bookingService = 

    $(document).ready(function() {
        $('#datepicker').datepicker({
            startDate: new Date(),
            multidate: true,
            format: "dd/mm/yyyy",
            daysOfWeekHighlighted: "5,6",
            datesDisabled: ['31/08/2017'],
            language: 'en'
        }).on('changeDate', function(e) {
            // `e` here contains the extra attributes
            $(this).find('.input-group-addon .count').text(' ' + e.dates.length);
        });
    });

