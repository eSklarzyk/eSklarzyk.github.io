module objects {

    export class Galaxy extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES 
        private _dy: number;

        // CONSTRUCTORS 
        constructor(imageString: string) {
            super(core.assets.getResult(imageString));
            this.start();
        }

        // PRIVATE METHODS 
        private _reset(): void {
            this.y = -700;
           // this.x = 0;
        }

        private _checkBounds(): void {
            if (this.y >= 0 && core.ifSpawn == false) {
                this._reset();
            }
        }

        public start(): void {
            this._reset();
            this._dy = .2; // 5px per frame down
        }

        // This method updates the object's properties every time it's called
        public update(): void {
            this._checkBounds();
            this.move();
        }

        public move() {
            if (core.ifSpawn == false)
                this.y += this._dy;
        }
    }
}