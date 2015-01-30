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
    // Adds new input when + button pressed
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

    // Deletes input for lists
    $(document).on('click', ".remove", function () {
        $(this).parent('div').remove();
    });

    // Adds and removes display of Save button
    $(document).on('click', ".ok", function () {
        $('.tutorial').addClass('fade-out');
    });

    $(document).on('click', ".indent-left", function () {
        $('.save-btn').removeClass('faded-out');
    });

    // Adds and removes display of About modal
    $(document).on('click', ".about-btn", function () {
        $('.about-mask').addClass('open');
        $('.content-wrapper, .header').addClass('modal-open');
    });

    $(document).on('click', ".about-mask", function () {
        $('.about-mask').removeClass('open');
        $('.content-wrapper, .header').removeClass('modal-open');
    });

    // Flowing Intro Animation
    var animateIn1 = function () {
        $($('.row-line')[0]).removeClass('hidden');
    }
    var animateIn2 = function () {
        $($('.row-line')[1]).removeClass('hidden');
    }
    var animateIn3 = function () {
        $($('.row-line')[2]).removeClass('hidden');
    }
    var animateIn4 = function () {
        $($('.row-line')[3]).removeClass('hidden');
    }
    var animateIn5 = function () {
        $($('.row-line')[4]).removeClass('hidden');
    }

    var kaskade = function () {
        //setTimeout(animateIn1, 150);
        setTimeout(animateIn2, 450);
        setTimeout(animateIn3, 650);
        setTimeout(animateIn4, 850);
        setTimeout(animateIn5, 1050);
    };

    kaskade();
    
    var savedAnimation1 = function () {
        $('.saved-message').addClass('show-saved');
    }
    var savedAnimation2 = function () {
        $('.saved-message').removeClass('show-saved');
    }

     var savedAnimation = function () {
        //setTimeout(animateIn1, 150);
        setTimeout(savedAnimation1, 100);
        setTimeout(savedAnimation2, 1200);
    };    

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

        $('.save-btn').addClass('faded-out');
        savedAnimation();


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

