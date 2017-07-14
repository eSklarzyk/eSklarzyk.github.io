var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        //creates an instance of mainMenu
        function Menu() {
            return _super.call(this) || this;
        }
        Menu.prototype.Start = function () {
            //add background
            this._backgr = new objects.Background("mainPage");
            this.addChild(this._backgr);
            //add start  button
            this._startButton = new objects.Button("playButton", 290, 200, true);
            this.addChild(this._startButton);
            //startbutton event listener
            this._startButton.on("click", this._startButtonClick, this);
            //add tutorial button
            this._tutorialButton = new objects.Button("tutButton", 290, 250, true);
            this.addChild(this._startButton);
            //tutButton listener
            this._tutorialButton.on("click", this._tutButtonClick, this);
            //add this scene to GLOBAL scene container
            core.stage.addChild(this);
        };
        Menu.prototype._startButtonClick = function (event) {
            //switch scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        Menu.prototype._tutButtonClick = function (event) {
            core.scene = config.Scene.TUTORIAL;
            core.changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=mainMenu.js.map