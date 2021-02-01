import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { intersectTwoRects, Rect } from "../Core/Utils";

export class Skier extends Entity {
    assetName = Constants.SKIER_DOWN;

    direction = Constants.SKIER_DIRECTIONS.DOWN;
    speed = Constants.SKIER_STARTING_SPEED;

    isJumping = false;
	jumpTimer;
	
	isDead = false;

    constructor(x, y) {
        super(x, y);
    }

    setDirection(direction) {
        this.direction = direction;
        this.updateAsset();
    }

    updateAsset() {
        this.assetName = Constants.SKIER_DIRECTION_ASSET[this.isJumping ? Constants.SKIER_DIRECTIONS.JUMP  : this.direction];
    }

    move() {
		if(this.isDead) {
			return;
		}

		switch(this.direction) {
            case Constants.SKIER_DIRECTIONS.LEFT_DOWN:
                this.moveSkierLeftDown();
                break;
            case Constants.SKIER_DIRECTIONS.DOWN:
                this.moveSkierDown();
                break;
            case Constants.SKIER_DIRECTIONS.RIGHT_DOWN:
                this.moveSkierRightDown();
                break;
        }
    }

    moveSkierLeft() {
		if(this.isDead) {
			return;
		}

        this.x -= Constants.SKIER_STARTING_SPEED;
    }

    moveSkierLeftDown() {
		if(this.isDead) {
			return;
		}

        this.x -= this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
        this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    }

    moveSkierDown() {
		if(this.isDead) {
			return;
		}

        this.y += this.speed;
    }

    moveSkierRightDown() {
		if(this.isDead) {
			return;
		}

        this.x += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
        this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    }

    moveSkierRight() {
		if(this.isDead) {
			return;
		}

        this.x += Constants.SKIER_STARTING_SPEED;
    }

    moveSkierUp() {
		if(this.isDead) {
			return;
		}

        this.y -= Constants.SKIER_STARTING_SPEED;
    }

    turnLeft() {
        if(this.isJumping)
            return;

        if(this.direction === Constants.SKIER_DIRECTIONS.CRASH) {
            this.moveSkierLeft();
            this.setDirection(Constants.SKIER_DIRECTIONS.LEFT);
        }
        else if(this.direction === Constants.SKIER_DIRECTIONS.LEFT) {
            this.moveSkierLeft();
        }
        else {
            this.setDirection(this.direction - 1);
        }
    }

    turnRight() {
        if(this.isJumping)
            return;

        if(this.direction === Constants.SKIER_DIRECTIONS.CRASH) {
            this.moveSkierRight();
            this.setDirection(Constants.SKIER_DIRECTIONS.RIGHT);
        }
        else if(this.direction === Constants.SKIER_DIRECTIONS.RIGHT) {
            this.moveSkierRight();
        }
        else {
            this.setDirection(this.direction + 1);
        }
    }

    turnUp() {
        if(this.direction === Constants.SKIER_DIRECTIONS.LEFT || this.direction === Constants.SKIER_DIRECTIONS.RIGHT) {
            this.moveSkierUp();
        }
    }

    turnDown() {
        this.setDirection(Constants.SKIER_DIRECTIONS.DOWN) ;
    }

    jumpIt() {
        if(this.isJumping)
          return;

        if(this.direction > Constants.SKIER_DIRECTIONS.LEFT && this.direction < Constants.SKIER_DIRECTIONS.RIGHT) {
            this.getAir(Constants.SKIER_AIRTIME.JUMP);
        }
    } 

    rampIt() {
        this.getAir(Constants.SKIER_AIRTIME.RAMP);
    }

    getAir(airTime) {
      this.isJumping = true;
      this.updateAsset();
      this.jumpTimer = setTimeout(() => this.landIt(), airTime * 1000);
    }
    
    landIt() {
		this.isJumping = false;
		clearTimeout(this.jumpTimer);
        this.updateAsset();
    }

	die() {
		this.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
		this.landIt();
		this.isDead = true;
    }

    checkIfSkierHitObstacle(obstacleManager, assetManager) {
        const asset = assetManager.getAsset(this.assetName);
        const skierBounds = new Rect(
            this.x - asset.width / 2,
            this.y - asset.height / 2,
            this.x + asset.width / 2,
            this.y - asset.height / 4
        );

        const collision = obstacleManager.getObstacles().find((obstacle) => {
            const obstacleAsset = assetManager.getAsset(obstacle.getAssetName());
            const obstaclePosition = obstacle.getPosition();
            const obstacleBounds = new Rect(
                obstaclePosition.x - obstacleAsset.width / 2,
                obstaclePosition.y - obstacleAsset.height / 2,
                obstaclePosition.x + obstacleAsset.width / 2,
                obstaclePosition.y
            );

            if(intersectTwoRects(skierBounds, obstacleBounds)) {
                if(this.isJumping) {
                    return !Constants.JUMPABLE.includes(obstacle.assetName);
                }
                else if(obstacle.assetName === Constants.RAMP) {
                    this.rampIt();
                    return false;
                }
                return true;
            }
            return false;
        });

        if(collision) {
            this.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
            this.landIt();
        }
    };
}