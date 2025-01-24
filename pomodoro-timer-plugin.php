<?php
/**
 * Plugin Name: TB #5 Pomodoro Timer 
 * Description: A simple timer to motivate you to work for 25min.
 * Version: 1.0.0
 * Author: Thomas Burnside
 */

// Enqueue styles and scripts
function pomodoro_timer_enqueue_assets() {
    if (is_singular() && has_shortcode(get_post()->post_content, 'pomodoro_timer')) {
        wp_enqueue_style(
            'pomodoro-timer-style',
            plugin_dir_url(__FILE__) . 'assets/css/style.css'
        );

        wp_enqueue_script(
            'pomodoro-timer-script',
            plugin_dir_url(__FILE__) . 'assets/js/script.js',
            [],
            null,
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'pomodoro_timer_enqueue_assets');

// Add shortcode for the pomodoro timer
function pomodoro_timer_shortcode() {
    ob_start();
    ?>
<div class="pomodoro-timer">
        <h1 class="title">Pomodoro Timer</h1>
        <p id="timer">25:00</p>
        <div class="button-wrapper">
            <button id="start">START</button>
            <button id="stop">STOP</button>
            <button id="reset">RESET</button>
        </div>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('pomodoro_timer', 'pomodoro_timer_shortcode');



