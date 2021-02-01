import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { intersectTwoRects, Rect } from "../Core/Utils";

export class Rhino extends Entity {
	assetName = Constants.RHINO_DEFAULT;

    startingPosition = {
		x: 0,
		y: 0
	};

	speed = Constants.RHINO_RUNNING_SPEED;
	step = 0;
	stepInterval;

	isAttackingSkier = false;
	isEatingSkier = false;

    constructor(x, y) {
		super(x, y);
		this.run();
    }

    setDirection(direction) {
        this.direction = direction;
        this.updateAsset();
    }

    updateAsset() {
        this.assetName = Constants.RHINO_ACTION_ASSET[Constants.RHINO_DEFAULT];
	}

	followSkier(skier) {
		this.y = skier.y;
		if(this.isAttackingSkier) {
			if(this.x - Constants.RHINO_ATTACK_X_THRESHHOLD > skier.x) {
				this.x -= Constants.RHINO_RUNNING_SPEED;
			}
			else if(!this.isEatingSkier) {
				this.eatSkier(skier);
				skier.die();
			}
		}
		else {
			this.x = skier.x + Constants.RHINO_ATTACK_X_THRESHHOLD + Constants.GAME_WIDTH / 2;
			if(this.y > Constants.RHINO_ATTACK_Y_COORDINATE) {
				this.attackSkier();
			}
		}
	}

	// running animation
	run() {
		this.stepInterval = setInterval(() => {
			this.assetName = Constants.RHINO_RUNNING_ASSETS[this.step % 2];
			this.step++;
		},400);
	}

	attackSkier() {
		this.isAttackingSkier = true;
	}

	// eating animation
	eatSkier(skier) {
		clearInterval(this.stepInterval);
		this.isEatingSkier = true;
		this.step = 0;
		this.stepInterval = setInterval(() => {
			skier.assetName = Constants.NONE;
			if(this.assetName === Constants.RHINO_DEFAULT) {
				this.gameOver();
			}
			this.assetName = Constants.RHINO_EATING_ASSETS[this.step] || Constants.RHINO_DEFAULT;
			this.step++;
		},400);
	}

	gameOver() {
		clearInterval(this.stepInterval);
	}
}