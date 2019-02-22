var Controls = {
    init: function () {
        var imgLink = document.getElementsByClassName('thumbnail');

        for (var i = 0; i < imgLink.length; i++)
        {
            imgLink[i].addEventListener('mouseover', Controls.mouseOverListener, false );
            imgLink[i].addEventListener('mouseout', Controls.mouseOutListener, false );
        }
    },

    mouseOverListener: function ( event ) {
        Controls.displayTooltip ( this );
    },

    mouseOutListener: function ( event ) {
        Controls.hideTooltip ( this );
    },

    displayTooltip: function ( imgLink ) {
        var tooltip = document.createElement ( "div" );
        var fullImg = document.createElement ( "img" );

        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;

        fullImg.src = imgLink.src;
        tooltip.appendChild ( fullImg );
        tooltip.className = "imgTooltip";

        var imgWidth = fullImg.naturalWidth;
        var imgHeight = fullImg.naturalHeight;

        var scale_factor = 0.95;
        var divWidth = (imgWidth < screenWidth) ? imgWidth : screenWidth * scale_factor;
        var divHeight = (imgHeight < screenHeight) ? imgHeight : screenHeight * scale_factor;

        tooltip.style.width = parseInt(divWidth) + 'px';
        tooltip.style.height = parseInt(divHeight) + 'px';

        var divLeft = (screenWidth / 2) - (divWidth / 2);
        var divTop = (screenHeight / 2) - (divHeight / 2);

        tooltip.style.top = parseInt(divTop) + 'px';
        tooltip.style.left = parseInt(divLeft) + 'px';

        imgLink._tooltip = tooltip;
        Controls._tooltip = tooltip;
        imgLink.parentNode.appendChild ( tooltip );

//        imgLink.addEventListener ( "mousemove", Controls.followMouse, false);
    },

    hideTooltip : function ( imgLink ) {
        imgLink.parentNode.removeChild ( imgLink._tooltip );
        imgLink._tooltip = null;
        Controls._tooltip = null;
    },

    mouseX: function ( event ) {
        if ( !event ) event = window.event;
        if ( event.pageX ) return event.pageX;
        else if ( event.clientX )
            return event.clientX + (document.documentElement.scrollLeft ?
                                    document.documentElement.scrollLeft :
                                    document.body.scrollLeft);
        else return 0;
    },

    mouseY: function ( event ) {
        if (!event) event = window.event;
        if (event.pageY) return event.pageY;
        else if (event.clientY)
            return event.clientY + (document.documentElement.scrollTop ?
                                    document.documentElement.scrollTop :
                                    document.body.scrollTop);
        else return 0;
    },

    followMouse: function ( event ) {
        var tooltip = Controls._tooltip.style;
        var offX = 15, offY = 15;

        var table = document.getElementById("listing_table");
        var table_offset = table.offset();
        var table_width = table.width();
        var table_height = table.height();
        var table_centerX = table_offset.left + width / 2;
        var table_centerY = table_offset.top + height / 2;

//        tooltip.left = (parseInt(Controls.mouseX(event))+offX) + 'px';
//        tooltip.top = (parseInt(Controls.mouseY(event))+offY) + 'px';
//        tooltip.left = (table_centerX) + 'px';
//        tooltip.top = (table_centerY) + 'px';
    }
};

Controls.init();
