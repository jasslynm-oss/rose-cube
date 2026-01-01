info.onScore(100, function () {
	
})
info.onLifeZero(function () {
    info.startCountdown(info.highScore())
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    game.setGameOverEffect(true, effects.confetti)
})
controller.player4.moveSprite(null)
game.onUpdateInterval(100, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
})
