/// <reference path="references.js" />
// if there are many scripts, better add their reference to single js file and add that file in the working js file

// Use left and right arrows to move Mario
// It takes few several seconds to generate the SVG background!
window.onload = function () {
    'use strict';

    var IMAGE_WIDTH = 1200,
        IMAGE_HEIGHT = 675,
        MARIO_INIRIAL_X = 500,
        MARIO_INITIAL_Y = 530,
        FRAME_RATE = 5,
        SPEED = 15,
        MARIO_IMAGE_WIDTH = 40,
        PIPE_LEFT_SIDE_X = 192,
        LEFT_SCREEN_BORDER = 5,
        stage = new Kinetic.Stage({
            container: 'animationContainer',
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT
        }),
        layer = new Kinetic.Layer(),
        RIGHT_SCREEN_BORDER = stage.attrs.width - PIPE_LEFT_SIDE_X - MARIO_IMAGE_WIDTH,
        frameCount,
        mario;

    mario = new Image();
    mario.onload = function () {
        // checkout the "Kinetic.Sprite" tutorial: http://www.html5canvastutorials.com/kineticjs/html5-canvas-kineticjs-sprite-tutorial/
        var walk = new Kinetic.Sprite({
            x: MARIO_INIRIAL_X,
            y: MARIO_INITIAL_Y,
            image: mario,
            animation: 'idle',
            animations: {
                idle: [
                    // x, y, width, height (4 frames)
                    107, 0, 34, 64,
                    145, 0, 34, 64,
                    183, 0, 34, 64,
                    221, 0, 34, 64,
                ],
                walkLeft: [
                    // x, y, width, height (3 frames)
                    69, 0, 34, 64,
                    35, 0, 30, 64,
                    0, 0, 33, 64,
                ],
                walkRight: [
                    // x, y, width, height (3 frames)
                    259, 0, 34, 64,
                    297, 0, 30, 64,
                    329, 0, 33, 64,
                ]
            },
            frameRate: FRAME_RATE,
            frameIndex: 0
        });

        layer.add(walk);
        stage.add(layer);

        walk.start();

        frameCount = 0;
        walk.on('frameIndexChange', function (evt) {
            if ((walk.animation() === 'walkLeft' || walk.animation() === 'walkRight') && ++frameCount > 3) {
                walk.animation('idle');
                frameCount = 0;
            }
        });

        function onKeyDown(evt) {
            if (evt.keyCode === 37 && walk.attrs.x > LEFT_SCREEN_BORDER) {
                walk.setX(walk.attrs.x -= SPEED);
                walk.attrs.animation = 'walkLeft';
            }
            if (evt.keyCode === 39 && walk.attrs.x < RIGHT_SCREEN_BORDER) {
                walk.setX(walk.attrs.x += SPEED);
                walk.attrs.animation = 'walkRight';
            }
        }

        window.addEventListener('keydown', onKeyDown);
    };

    mario.src = '../images/super-mario-positions.gif';

    // function from file "super-mario-background.js"
    // Raphael SVG is used
    generateBackground();
}