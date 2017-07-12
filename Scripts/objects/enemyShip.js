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
var objects;
(function (objects) {
    var EnemyShip = (function (_super) {
        __extends(EnemyShip, _super);
        function EnemyShip(imageString) {
            var _this = _super.call(this, imageString) || this;
            _this.check = false;
            _this.dead = false;
            _this.health = 20;
            _this.sheild = 30;
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            _this.Start();
            return _this;
        }
        EnemyShip.prototype._reset = function () {
            this.x = 200; //(Math.random() * 640); //use this to tell where to spawn 
            this.y = 200;
        };
        EnemyShip.prototype.Start = function () {
            this._reset();
        };
        EnemyShip.prototype.update = function () {
            this.enemtShipDespawn();
            this.enemyShipMove();
        };
        EnemyShip.prototype.enemtShipDespawn = function () {
            if (this.x >= 740 || this.x <= -100 || this.y >= 580 || this.y <= -200 || this.dead == true) {
                this.check = false;
                this.dead = false;
                this._reset();
            }
        };
        EnemyShip.prototype.checkPlayerLoc = function () {
            this.HoldplayerX = this.playerX;
            this.HoldplayerY = this.playerY;
        };
        EnemyShip.prototype.enemyShipMove = function () {
            if (this.check == false) {
                this.checkPlayerLoc();
                this.check = true;
            }
            else {
                //this.x -= this.HoldplayerX * 0.05;//change to have radius around player
                //this.y -= this.HoldplayerY * 0.05;
            }
        };
        EnemyShip.prototype.Damage = function (dam) {
            if (this.sheild > 0) {
                this.sheild - dam;
            }
            else {
                if (this.health > 0) {
                    this.health - dam;
                }
                else {
                    this.dead = true;
                }
            }
        };
        EnemyShip.prototype.col = function () {
        };
        EnemyShip.prototype.giveData = function (PX, PY) {
            this.playerX = PX;
            this.playerY = PY;
        };
        return EnemyShip;
    }(objects.GameObject));
    objects.EnemyShip = EnemyShip;
})(objects || (objects = {}));
//# sourceMappingURL=enemyShip.js.map