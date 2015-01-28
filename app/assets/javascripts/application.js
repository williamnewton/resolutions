// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



$(document).ready(function () {
    $(document).on('click', ".daily", function () {
        $('#daily').append('<div class="new-row"><input placeholder="Type goal"></input> <span class="remove">X</span></div>');
    });

    $(document).on('click', ".weekly", function () {
        $('#weekly').append('<div class="new-row"><input placeholder="Type goal"></input> <span class="remove">X</span></div>');
    });

    $(document).on('click', ".bi-weekly", function () {
        $('#bi-weekly').append('<div class="new-row"><input placeholder="Type goal"></input> <span class="remove">X</span></div>');
    });

    $(document).on('click', ".monthly", function () {
        $('#monthly').append('<div class="new-row"><input placeholder="Type goal"></input> <span class="remove">X</span></div>');
    });

    $(document).on('click', ".remove", function () {
        $(this).parent('div').remove();
    });

    $(document).on('click', ".ok", function () {
        $('.tutorial').addClass('fade-out');
    });

    $('.save-btn').click(function(e) {
        e.preventDefault();
        var data = {};
        var url = '/items/populate'
        var ids = ['#daily', '#weekly', '#bi-weekly', '#monthly'];

        for (var i = ids.length - 1; i >= 0; i--) {
            var id = ids[i];
            data[id.toString()] = data[id.toString()] || [];
            $(id).find('input').each(function() {
                if ($(this).val() != '') {
                    data[id.toString()].push($(this).val());
                };
            });
        };

        console.log(data);

        var request = $.post(url, data);
        request.always(function() {
            console.log('gah');
        })
        request.done(function() {
            console.log('saved');
        });
    });
});

