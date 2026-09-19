namespace SpriteKind {
    export const BURGER = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let JUMP = 0
    if (hc == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . f e e e f . . . . . . 
            . . . . f e e e f . . . . . . . 
            . . . f e e e f . . . . . . . . 
            . . f e e e f c f . . . . . . . 
            . f e e e f c c c f . . . . . . 
            . . f e f . f c c c f . . . . . 
            . . . f . . . f c c c f . . . . 
            . . . . . . . . f c c c f . . . 
            . . . . . . . . . f c c c f . . 
            . . . . . . . . . . f c c c f . 
            . . . . . . . . . . . f c c c f 
            . . . . . . . . . . . . f c c c 
            . . . . . . . . . . . . . f c f 
            `, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 60, Render.getAttribute(Render.attribute.dirY) * 60)
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
        projectile.setScale(0.5, ScaleAnchor.Middle)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . f e e e f . . . . . . 
            . . . . f e e e f . . . . . . . 
            . . . f e e e f . . . . . . . . 
            . . f e e e f c f . . . . . . . 
            . f e e e f c c c f . . . . . . 
            . . f e f . f c c c f . . . . . 
            . . . f . . . f c c c f . . . . 
            . . . . . . . . f c c c f . . . 
            . . . . . . . . . f c c c f . . 
            . . . . . . . . . . f c c c f . 
            . . . . . . . . . . . f c c c f 
            . . . . . . . . . . . . f c c c 
            . . . . . . . . . . . . . f c f 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f e f . . . . . . 
            . . . . . . f e e e f . . . . . 
            . . . . . . . f e e e f . . . . 
            . . . . . . . . f e e e f . . . 
            . . . . . . . f c f e e e f . . 
            . . . . . . f c c c f e e e f . 
            . . . . . f c c c f . f e f . . 
            . . . . f c c c f . . . f . . . 
            . . . f c c c f . . . . . . . . 
            . . f c c c f . . . . . . . . . 
            . f c c c f . . . . . . . . . . 
            f c c c f . . . . . . . . . . . 
            c c c f . . . . . . . . . . . . 
            f c f . . . . . . . . . . . . . 
            `,img`
            f c f . . . . . . . . . . . . . 
            c c c f . . . . . . . . . . . . 
            f c c c f . . . . . . . . . . . 
            . f c c c f . . . . . . . . . . 
            . . f c c c f . . . . . . . . . 
            . . . f c c c f . . . . . . . . 
            . . . . f c c c f . . . f . . . 
            . . . . . f c c c f . f e f . . 
            . . . . . . f c c c f e e e f . 
            . . . . . . . f c f e e e f . . 
            . . . . . . . . f e e e f . . . 
            . . . . . . . f e e e f . . . . 
            . . . . . . f e e e f . . . . . 
            . . . . . . . f e f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . f c f 
            . . . . . . . . . . . . f c c c 
            . . . . . . . . . . . f c c c f 
            . . . . . . . . . . f c c c f . 
            . . . . . . . . . f c c c f . . 
            . . . . . . . . f c c c f . . . 
            . . . f . . . f c c c f . . . . 
            . . f e f . f c c c f . . . . . 
            . f e e e f c c c f . . . . . . 
            . . f e e e f c f . . . . . . . 
            . . . f e e e f . . . . . . . . 
            . . . . f e e e f . . . . . . . 
            . . . . . f e e e f . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
    if (JUMP == 1) {
        Render.jumpWithHeightAndDuration(mySprite, 16, 700)
        music.play(music.stringPlayable("F A - - - - - - ", 500), music.PlaybackMode.InBackground)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    game.showLongText("You opened the correct door", DialogLayout.Bottom)
    tiles.setWallAt(tiles.getTileLocation(40, 5), false)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile23`)) {
        tiles.setWallAt(location, false)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    } else {
        tiles.setWallAt(location, true)
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    if (hc == 1) {
        game.showLongText("Placed Hammer", DialogLayout.Bottom)
        hc = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    game.showLongText("You cant open this", DialogLayout.Bottom)
})
let Money: Sprite = null
let Dollars = 0
let M1v = 0
let M2v = 0
let Bill_3: Sprite = null
let Bill_2: Sprite = null
let Bill_1: Sprite = null
let M3v = 0
let Amount = 0
let Gold = 0
let projectile: Sprite = null
let hc = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`Maze1`)
mySprite = Render.getRenderSpriteVariable()
mySprite = Render.getRenderSpriteVariable()
Render.setViewMode(ViewMode.raycastingView)
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
let Goal = sprites.create(img`
    . . f f f f f f f f f f f f f f f f 
    . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    . . f 1 f 1 1 1 f 1 f 1 f 1 1 f 1 f 
    . . f 1 f 1 f 1 f 1 f 1 f f 1 f 1 f 
    . . f 1 f 1 f 1 f 1 f 1 f 1 f f 1 f 
    . . f 1 1 f f f 1 1 f 1 f 1 1 f 1 f 
    . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    . . f f f f f f f f f f f f f f f f 
    . . f . . . . . . . . . . . . . . . 
    . . f . . . . . . . . . . . . . . . 
    . . f . . . . . . . . . . . . . . . 
    . . f . . . . . . . . . . . . . . . 
    . . f . . . . . . . . . . . . . . . 
    . . f . . . . . . . . . . . . . . . 
    . . f . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(Goal, assets.tile`myTile3`)
let Key1 = sprites.create(img`
    7 7 7 7 
    7 . . 7 
    7 . . 7 
    7 7 7 7 
    . 7 7 . 
    . 7 7 . 
    . 7 7 . 
    `, SpriteKind.Player)
tiles.placeOnTile(Key1, tiles.getTileLocation(12, 2))
let Sign = sprites.create(img`
    f f f f f f f f f f f f f f f 
    f e e e e e e e e e e e e e f 
    f e d d d d d d d d d d d e f 
    f e d f f f d d d d d d d e f 
    f e d d d d d d f f f d d e f 
    f e d d f f d d d d d d d e f 
    f e d d d d d d d d d d d e f 
    f e e e e e e e e e e e e e f 
    f f f f f f f e f f f f f f f 
    . . . . . . f e f . . . . . . 
    . . . . . . f e f . . . . . . 
    . . . . . . f e f . . . . . . 
    . . . . . . f e f . . . . . . 
    . . . . . . f e f . . . . . . 
    . . . . . . f e f . . . . . . 
    . . . . . . f e f . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Sign, tiles.getTileLocation(8, 2))
Sign.setScale(0.5, ScaleAnchor.Middle)
music.play(music.createSong(hex`0050000408010109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80020000000010003000206080009000300020810001100030002061800190003000208`), music.PlaybackMode.LoopingInBackground)
let Key2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let Key3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . 7 . . . 7 . . . . . . 
    . . . . . 7 . . . 7 . . . . . . 
    . . . . . 7 . . . 7 . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Key2, tiles.getTileLocation(2, 5))
tiles.placeOnTile(Key3, tiles.getTileLocation(3, 14))
let textSprite = textsprite.create("", 0, 1)
let K1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . 2 . . . . . 2 . . . . 
    . . . . . 2 . . . . . 2 . . . . 
    . . . . . 2 . . . . . 2 . . . . 
    . . . . . 2 . . . . . 2 . . . . 
    . . . . . 2 . . . . . 2 . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let K2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 4 . . . . . 
    . . . . . 4 . . . . . 4 . . . . 
    . . . . . 4 . . . . . 4 . . . . 
    . . . . . 4 . . . . . 4 . . . . 
    . . . . . 4 . . . . . 4 . . . . 
    . . . . . 4 . . . . . 4 . . . . 
    . . . . . . 4 4 4 4 4 . . . . . 
    . . . . . . . . 4 . . . . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . . . . 4 . . . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let K3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . 5 . . . . . 5 . . . . 
    . . . . . 5 . . . . . 5 . . . . 
    . . . . . 5 . . . . . 5 . . . . 
    . . . . . 5 . . . . . 5 . . . . 
    . . . . . 5 . . . . . 5 . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let K4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . 7 . . . . . 7 . . . . 
    . . . . . 7 . . . . . 7 . . . . 
    . . . . . 7 . . . . . 7 . . . . 
    . . . . . 7 . . . . . 7 . . . . 
    . . . . . 7 . . . . . 7 . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let K5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 9 9 9 9 9 . . . . . 
    . . . . . 9 . . . . . 9 . . . . 
    . . . . . 9 . . . . . 9 . . . . 
    . . . . . 9 . . . . . 9 . . . . 
    . . . . . 9 . . . . . 9 . . . . 
    . . . . . 9 . . . . . 9 . . . . 
    . . . . . . 9 9 9 9 9 . . . . . 
    . . . . . . . . 9 . . . . . . . 
    . . . . . . 9 9 9 . . . . . . . 
    . . . . . . . . 9 . . . . . . . 
    . . . . . 9 9 9 9 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let K6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 f 1 f 1 . . . . . 
    . . . . . 1 . . . . . 1 . . . . 
    . . . . . f . . . . . f . . . . 
    . . . . . 1 . . . . . 1 . . . . 
    . . . . . f . . . . . f . . . . 
    . . . . . 1 . . . . . 1 . . . . 
    . . . . . . 1 f 1 f 1 . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . 1 f 1 . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . f 1 f 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(K1, tiles.getTileLocation(14, 25))
tiles.placeOnTile(K2, tiles.getTileLocation(13, 22))
tiles.placeOnTile(K3, tiles.getTileLocation(14, 30))
tiles.placeOnTile(K4, tiles.getTileLocation(1, 19))
tiles.placeOnTile(K5, tiles.getTileLocation(3, 27))
tiles.placeOnTile(K6, tiles.getTileLocation(4, 22))
let otherSprite = sprites.create(img`
    f f f f f f f f f f f f f f f 
    f e e e e e e e e e e e e e f 
    f e d d d d d d d d d d d e f 
    f e d f f f d d d d d d d e f 
    f e d d d d d d f f f d d e f 
    f e d d f f d d d d d d d e f 
    f e d d d d d d d d d d d e f 
    f e e e e e e e e e e e e e f 
    f f f f f f f e f f f f f f f 
    . . . . . . f e f . . . . . . 
    . . . . . . f e f . . . . . . 
    . . . . . . f e f . . . . . . 
    . . . . . . f e f . . . . . . 
    . . . . . . f e f . . . . . . 
    . . . . . . f e f . . . . . . 
    . . . . . . f e f . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(otherSprite, tiles.getTileLocation(58, 19))
otherSprite.setScale(0.5, ScaleAnchor.Middle)
let Hamer = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f e f . . . . . . . 
    . . . . . f e e e f . . . . . . 
    . . . . f e e e f . . . . . . . 
    . . . f e e e f . . . . . . . . 
    . . f e e e f c f . . . . . . . 
    . f e e e f c c c f . . . . . . 
    . . f e f . f c c c f . . . . . 
    . . . f . . . f c c c f . . . . 
    . . . . . . . . f c c c f . . . 
    . . . . . . . . . f c c c f . . 
    . . . . . . . . . . f c c c f . 
    . . . . . . . . . . . f c c c f 
    . . . . . . . . . . . . f c c c 
    . . . . . . . . . . . . . f c f 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(Hamer, assets.tile`myTile25`)
Hamer.setScale(0.5, ScaleAnchor.Middle)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . 7 . 7 7 7 7 . . . . . 
    . . . . . 7 7 . 7 . . 7 . 7 . . 
    . . . . . 7 . 7 7 7 7 . 7 . . . 
    . . . . . . . . 7 . . . 7 . . . 
    . . . . . . . . 7 7 7 . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 . . . . . . . . . . . . 7 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(46, 1))
game.onUpdate(function () {
    if (Gold == 5) {
        Gold = 0
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        game.showLongText("Thanks for your payment ", DialogLayout.Bottom)
        tiles.setWallAt(tiles.getTileLocation(47, 24), false)
    }
})
game.onUpdate(function () {
    if (Amount == 100) {
        Gold += 1
        Amount = 0
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        game.showLongText("Thanks for buying Gold", DialogLayout.Bottom)
    }
})
game.onUpdate(function () {
    if (M3v == 0) {
        tiles.setWallAt(tiles.getTileLocation(57, 16), true)
        tiles.setWallAt(tiles.getTileLocation(58, 16), false)
        tiles.setWallAt(tiles.getTileLocation(59, 16), false)
    } else if (M3v == 1) {
        tiles.setWallAt(tiles.getTileLocation(57, 16), false)
        tiles.setWallAt(tiles.getTileLocation(58, 16), true)
        tiles.setWallAt(tiles.getTileLocation(59, 16), false)
    } else if (M3v == 2) {
        tiles.setWallAt(tiles.getTileLocation(57, 16), false)
        tiles.setWallAt(tiles.getTileLocation(58, 16), false)
        tiles.setWallAt(tiles.getTileLocation(59, 16), true)
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(Bill_1)) {
        Amount += 20
        game.showLongText("You got 20 dollars", DialogLayout.Bottom)
        sprites.destroy(Bill_1)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
    if (mySprite.overlapsWith(Bill_2)) {
        Amount += 20
        game.showLongText("You got 20 dollars", DialogLayout.Bottom)
        sprites.destroy(Bill_2)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
    if (mySprite.overlapsWith(Bill_3)) {
        Amount += 20
        game.showLongText("You got 20 dollars", DialogLayout.Bottom)
        sprites.destroy(Bill_3)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
})
game.onUpdate(function () {
    if (M2v == 0) {
        tiles.setWallAt(tiles.getTileLocation(57, 28), true)
        tiles.setWallAt(tiles.getTileLocation(57, 29), false)
        tiles.setWallAt(tiles.getTileLocation(57, 30), false)
    } else if (M2v == 1) {
        tiles.setWallAt(tiles.getTileLocation(57, 28), false)
        tiles.setWallAt(tiles.getTileLocation(57, 30), false)
        tiles.setWallAt(tiles.getTileLocation(57, 29), true)
    } else if (M2v == 2) {
        tiles.setWallAt(tiles.getTileLocation(57, 28), false)
        tiles.setWallAt(tiles.getTileLocation(57, 29), false)
        tiles.setWallAt(tiles.getTileLocation(57, 30), true)
    }
})
game.onUpdate(function () {
    if (M1v == 0) {
        tiles.setWallAt(tiles.getTileLocation(54, 23), true)
        tiles.setWallAt(tiles.getTileLocation(54, 24), false)
    } else if (M1v == 1) {
        tiles.setWallAt(tiles.getTileLocation(54, 23), false)
        tiles.setWallAt(tiles.getTileLocation(54, 24), true)
    }
})
game.onUpdate(function () {
    if (Dollars == 100) {
        tiles.setWallAt(tiles.getTileLocation(31, 24), false)
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        game.showLongText("Thanks for your payment", DialogLayout.Bottom)
        Dollars = 0
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(Money)) {
        Dollars += 20
        game.showLongText("You got 20 dollars", DialogLayout.Bottom)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        sprites.destroy(Money)
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(mySprite2)) {
        tiles.setWallAt(tiles.getTileLocation(31, 6), false)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        sprites.destroy(mySprite2)
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(Hamer)) {
        sprites.destroy(Hamer)
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        hc = 1
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(Key1)) {
        tiles.setWallAt(tiles.getTileLocation(14, 4), false)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        sprites.destroy(Key1)
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(Key3)) {
        tiles.setWallAt(tiles.getTileLocation(1, 15), false)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        sprites.destroy(Key3)
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(Key2)) {
        tiles.setWallAt(tiles.getTileLocation(7, 14), false)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        sprites.destroy(Key2)
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(Goal)) {
        game.setGameOverMessage(true, "You Escaped (kinda)")
        game.setGameOverEffect(true, effects.confetti)
        game.gameOver(true)
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(K3)) {
        tiles.setWallAt(tiles.getTileLocation(1, 20), false)
        tiles.setWallAt(tiles.getTileLocation(2, 28), false)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        sprites.destroy(K3)
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(K2)) {
        tiles.setWallAt(tiles.getTileLocation(6, 23), false)
        tiles.setWallAt(tiles.getTileLocation(3, 28), false)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        sprites.destroy(K2)
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(K1)) {
        tiles.setWallAt(tiles.getTileLocation(14, 20), false)
        tiles.setWallAt(tiles.getTileLocation(3, 29), false)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        sprites.destroy(K1)
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(K6)) {
        tiles.setWallAt(tiles.getTileLocation(15, 25), false)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        sprites.destroy(K6)
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(K4)) {
        tiles.setWallAt(tiles.getTileLocation(3, 27), false)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        sprites.destroy(K4)
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(K5)) {
        tiles.setWallAt(tiles.getTileLocation(4, 24), false)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        sprites.destroy(K5)
    }
})
game.onUpdateInterval(2000, function () {
    if (M1v == 1) {
        M1v = 0
    } else {
        M1v += 1
    }
})
game.onUpdateInterval(500, function () {
    if (M3v == 2) {
        M3v = 0
    } else {
        M3v += 1
    }
})
game.onUpdateInterval(500, function () {
    if (M2v == 2) {
        M2v = 0
    } else {
        M2v += 1
    }
})
game.onUpdateInterval(500, function () {
    if (mySprite.overlapsWith(otherSprite)) {
        game.showLongText("ESCAPE", DialogLayout.Full)
        SAM.speakWithPreset("Was there someone before me?!", SAM.VoicePreset.SAM)
    }
})
game.onUpdateInterval(500, function () {
    if (mySprite.overlapsWith(Sign)) {
        game.showLongText("ESCAPE", DialogLayout.Bottom)
        SAM.speak("I need to RUUUUUNNNN")
    }
})
game.onUpdateInterval(10000, function () {
    sprites.destroy(Bill_1)
    Bill_1 = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b 7 7 7 7 7 7 5 7 7 7 7 7 7 7 b 
        b 7 7 7 7 7 5 5 5 7 7 7 7 7 7 b 
        b 7 7 5 7 7 5 7 7 7 7 7 5 7 7 b 
        b 7 5 7 5 7 5 5 5 7 7 5 7 5 7 b 
        b 7 7 5 7 7 7 7 5 7 7 7 5 7 7 b 
        b 7 7 7 7 7 5 5 5 7 7 7 7 7 7 b 
        b 7 7 7 7 7 7 5 7 7 7 7 7 7 7 b 
        b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(Bill_1, assets.tile`myTile18`)
})
game.onUpdateInterval(10000, function () {
    sprites.destroy(Bill_2)
    Bill_2 = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b 7 7 7 7 7 7 5 7 7 7 7 7 7 7 b 
        b 7 7 7 7 7 5 5 5 7 7 7 7 7 7 b 
        b 7 7 5 7 7 5 7 7 7 7 7 5 7 7 b 
        b 7 5 7 5 7 5 5 5 7 7 5 7 5 7 b 
        b 7 7 5 7 7 7 7 5 7 7 7 5 7 7 b 
        b 7 7 7 7 7 5 5 5 7 7 7 7 7 7 b 
        b 7 7 7 7 7 7 5 7 7 7 7 7 7 7 b 
        b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(Bill_2, assets.tile`myTile18`)
})
game.onUpdateInterval(10000, function () {
    sprites.destroy(Bill_3)
    Bill_3 = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b 7 7 7 7 7 7 5 7 7 7 7 7 7 7 b 
        b 7 7 7 7 7 5 5 5 7 7 7 7 7 7 b 
        b 7 7 5 7 7 5 7 7 7 7 7 5 7 7 b 
        b 7 5 7 5 7 5 5 5 7 7 5 7 5 7 b 
        b 7 7 5 7 7 7 7 5 7 7 7 5 7 7 b 
        b 7 7 7 7 7 5 5 5 7 7 7 7 7 7 b 
        b 7 7 7 7 7 7 5 7 7 7 7 7 7 7 b 
        b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(Bill_3, assets.tile`myTile18`)
})
game.onUpdateInterval(10000, function () {
    sprites.destroy(Money)
    Money = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b 7 7 7 7 7 7 5 7 7 7 7 7 7 7 b 
        b 7 7 7 7 7 5 5 5 7 7 7 7 7 7 b 
        b 7 7 5 7 7 5 7 7 7 7 7 5 7 7 b 
        b 7 5 7 5 7 5 5 5 7 7 5 7 5 7 b 
        b 7 7 5 7 7 7 7 5 7 7 7 5 7 7 b 
        b 7 7 7 7 7 5 5 5 7 7 7 7 7 7 b 
        b 7 7 7 7 7 7 5 7 7 7 7 7 7 7 b 
        b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(Money, assets.tile`myTile16`)
})
