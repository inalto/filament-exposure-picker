
export default function exposurePicker(args) {
    return {
        state: args.state,
        mode: 'dark',
        open: false,
        canvas: null,
        ctx: null,
        x0: 0,
        y0: 0,
        width: 256,
        height: 256,
        angle: 0,
        isDragged: false,
        direction: {
            '-90': 'W',
            '-67.5': 'WNW',
            '-45': 'NW',
            '-22.5': 'NNW',
            '0': 'N',
            '22.5': 'NNE',
            '45': 'NE',
            '67.5': 'ENE',
            '90': 'E',
            '112.5': 'ESE',
            '135': 'SE',
            '157.5': 'SSE',
            '180': 'S',
            '202.5': 'SSW',
            '225': 'SW',
            '247.5': 'WSW',
        },
        angles: {
            'W': '-90',
            'WNW': '-67.5',
            'NW': '-45',
            'NNW': '-22.5',
            'N': '0',
            'NNE': '22.5',
            'NE': '45',
            'ENE': '67.5',
            'E': '90',
            'ESE': '112.5',
            'SE': '135',
            'SSE': '157.5',
            'S': '180',
            'SSW': '202.5',
            'SW': '225',
            'WSW': '247.5',

        },
        init: function () {



            this.canvas = this.$refs.can;
            this.ctx = this.canvas.getContext('2d');
            this.ctx.canvas.width = this.width;
            this.ctx.canvas.height = this.height;

            this.angle = this.angles[this.state];
            this.x0 = this.width / 2;
            this.y0 = this.height / 2;
            console.log(this.x0+' '+this.y0);
            this.drawArrow();
        },

        setupListeners: function () {
            this.canvas.addEventListener('mousedown', function (event) {
                if (this.open) {
                    if (event.currentTarget.matches(':hover')) {
                            this.isDragged = !this.isDragged ;
                    }
                    const bounds = event.currentTarget.getBoundingClientRect();
                    this.x = event.clientX - bounds.left;
                    this.y = event.clientY - bounds.top;

                    this.angle = Math.round((Math.atan2(this.y - this.y0, this.x - this.x0) * 180 / Math.PI + 90) / 22.5) * 22.5;
                    this.setDirection(this.direction[this.angle]);

                    this.drawArrow();
                }
            }.bind(this));

            this.canvas.addEventListener('dblclick', function (event) {
                this.isDragged = false;
                this.open=false;
            }.bind(this));

            window.addEventListener('mouseup', function (e) {
                if (e.target == this.canvas) {
                    window.removeEventListener('mousemove', function (event) {return;});
                    this.isDragged = false;
                }
            }.bind(this));
        },
        setDirection: function (dir) {
            this.state = dir;
            this.angle = this.angles[this.state];

        },
        drawArrow: function () {

            if (!(this.state in this.angles))  return;



             var width = 10;
             var length = this.width / 2 - 10;

             //get mouse angle relative to center from mouse position
             /*
             if (this.onOpen==false){
                 this.angle = Math.round((Math.atan2(this.y - this.y0, this.x - this.x0) * 180 / Math.PI + 90) / 22.5) * 22.5;
             } else {
                 this.onOpen=false;
             }
             */
             //update rotation center
             this.ctx.clearRect(0, 0, this.width, this.height);

             let region = new Path2D();
             region.moveTo(length, 0);
             region.lineTo(length + width, -width);
             region.lineTo(length + width, width);
             region.lineTo(length, 0);
             region.closePath();

             this.ctx.save();
             this.ctx.translate(this.x0, this.y0);
             this.ctx.rotate((this.angle - 90) * Math.PI / 180);
             if (this.mode == 'dark') {
                this.ctx.fillStyle = '#ffffff';
             } else {
             this.ctx.fillStyle = '#000000';
             }
             this.ctx.fill(region);
             this.ctx.restore();
             navigator.vibrate(100);
     /*
             if (this.element.value !== this.last) {
                 this.element.dispatchEvent(new Event('change'));
                 this.last = this.element.value;

             }
     */
         }



    }
}
