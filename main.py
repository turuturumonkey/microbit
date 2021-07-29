def on_button_pressed_a():
    basic.show_string("START")
input.on_button_pressed(Button.A, on_button_pressed_a)

music.play_melody("C D E F G - A G ", 170)
music.play_melody("F E F E - - - - ", 170)
basic.show_icon(IconNames.HEART)
basic.pause(100)
basic.clear_screen()