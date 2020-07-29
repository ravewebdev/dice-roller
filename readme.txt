=== Dice Roller ===
Contributors: ravewebdev
Author URI: https://ravewebdev.com/
Tags: gutenberg, blocks, rpg, role-playing game, dice
Requires at least: 5.2
Tested up to: 5.4.0
Requires PHP: 7.0.0
Stable tag: 1.1.4
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Dice Roller block to for use in TTRPGs.

== Description ==

This plugin provides the Dice Roller block, which can be used to roll different polyhedral dice for use in Table-Top Role-Playing Games.

== Installation ==

1. Upload the `dice-roller` folder to the `/wp-content/plugins` directory.
2. Activate the Dice Roller plugin through the 'Plugins' menu in WordPress.
3. Add the 'Dice Roller' block in a post or page.
4. Select the type and number of dice you want in your block. Optionally, if you select to include two or more of one die, select what function to use on the dice (e.g., Add all rolls together).
5. Save and view your page or post.
6. Click 'Roll these dice!' to generate die results.

== Frequently Asked Questions ==

= How should I use this block? =
Use this block anytime you want to simulate rolling some dice (or a coin flip)! If you're building a character for a Role-Playing Game, try using this block for attack rolls. Each block instance can represent a different weapon or attack, including the attack roll itself, damage, and any bonus or penalty rolls.

= How can I report issues or suggest improvements? =
Feel free to create an issue or PR in the [Github repo here](https://github.com/ravewebdev/dice-roller).

== Screenshots ==

1. Admin Demo: Insert Dice Roller block and select dice.
2. Frontend Demo: Rolling dice.

== Changelog ==

= 1.1.4 =
* Fixed: Centered die list to align elements properly when result text length exceeds width of dice.

= 1.1.3 =
* Updated: Simplified dice list styling to avoid size jumps after rolling.

= 1.1.2 =
* Fixed: Updated webpack config and js setup to work with wp-scripts v12.
* Updated: Brought npm packages up to latest versions.

= 1.1.1 =
* Fixed: Removed duplicate block wrapper `div` on frontend display.

= 1.1.0 =
* Added: Added additional Multi-die handling options for returning sum resulting from dropping the highest or lowest roll.
* Added: Created data attribute for roll result values.

= 1.0.2 =
* Updated: Cleaned up code, comments to be more in line with similar blocks (e.g., Initiative Tracker).

= 1.0.1 =
* Fixed: Updated icon styling for accessibility on darker screens.

= 1.0.0 =
* Added: Create Dice Roller block with frontend polyhedral rolling and custom multi-die handling.

== Credits ==

* "D100" [polyhedron](https://thenounproject.com/term/polyhedron/1460323/) icon by emilegraphics from [the Noun Project](https://thenounproject.com).
* "D20" [icosahedron](https://thenounproject.com/term/icosahedron/6890) icon by Alessandro Bertoni from [the Noun Project](https://thenounproject.com).
* "D12" [dodecahedron](https://thenounproject.com/term/dodecahedron/6889) icon by Alessandro Bertoni from [the Noun Project](https://thenounproject.com).
* "D10" [decahedron](https://thenounproject.com/term/decahedron/6888) icon by Alessandro Bertoni from [the Noun Project](https://thenounproject.com).
* "D8" [octahedron](https://thenounproject.com/term/octahedron/6891) icon by Alessandro Bertoni from [the Noun Project](https://thenounproject.com).
* "D6" [cube](https://thenounproject.com/term/cube/6887/) icon by Alessandro Bertoni from [the Noun Project](https://thenounproject.com).
* "D4" [tetrahedron](https://thenounproject.com/term/tetrahedron/6892) icon by Alessandro Bertoni from [the Noun Project](https://thenounproject.com).
* "D2" [coin](https://thenounproject.com/term/coin/754499) icon by Bakunetsu Kaito from [the Noun Project](https://thenounproject.com).
