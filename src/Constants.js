export const GAME_WIDTH = window.innerWidth;
export const GAME_HEIGHT = window.innerHeight;

export const SKIER_CRASH = 'skierCrash';
export const SKIER_LEFT = 'skierLeft';
export const SKIER_LEFTDOWN = 'skierLeftDown';
export const SKIER_DOWN = 'skierDown';
export const SKIER_JUMP = 'skierJump';
export const SKIER_RIGHTDOWN = 'skierRightDown';
export const SKIER_RIGHT = 'skierRight';
export const TREE = 'tree';
export const TREE_CLUSTER = 'treeCluster';
export const ROCK1 = 'rock1';
export const ROCK2 = 'rock2';
export const RAMP = 'ramp';
export const RHINO_DEFAULT = 'rhinoDefault';
export const RHINO_RUN_0 = 'rhinoRun1';
export const RHINO_RUN_1 = 'rhinoRun2';
export const RHINO_EAT_0 = 'rhinoEat1';
export const RHINO_EAT_1 = 'rhinoEat2';
export const RHINO_EAT_2 = 'rhinoEat3';
export const RHINO_EAT_3 = 'rhinoEat4';
export const RHINO_EAT_4 = 'rhinoEat5';
export const RHINO_EAT_5 = 'rhinoEat6';
export const NONE = 'none';

export const SKIER_STARTING_SPEED = 10;
export const SKIER_DIAGONAL_SPEED_REDUCER = 1.4142;

export const RHINO_RUNNING_SPEED = 8;
export const RHINO_ATTACK_X_THRESHHOLD = 15;
export const RHINO_ATTACK_Y_COORDINATE = 25000;

export const ASSETS = {
    [SKIER_CRASH]: 'img/skier_crash.png',
    [SKIER_LEFT]: 'img/skier_left.png',
    [SKIER_LEFTDOWN]: 'img/skier_left_down.png',
    [SKIER_DOWN]: 'img/skier_down.png',
    [SKIER_JUMP]: 'img/skier_jump_1.png',
    [SKIER_RIGHTDOWN]: 'img/skier_right_down.png',
    [SKIER_RIGHT]: 'img/skier_right.png',
    [TREE] : 'img/tree_1.png',
    [TREE_CLUSTER] : 'img/tree_cluster.png',
    [ROCK1] : 'img/rock_1.png',
    [ROCK2] : 'img/rock_2.png',
    [RAMP] : 'img/jump_ramp.png',
	[RHINO_DEFAULT] : 'img/rhino_default.png',
	[RHINO_RUN_0] : 'img/rhino_run_left.png',
	[RHINO_RUN_1] : 'img/rhino_run_left_2.png',
	[RHINO_EAT_0] : 'img/rhino_lift.png',
	[RHINO_EAT_1] : 'img/rhino_lift_mouth_open.png',
	[RHINO_EAT_2] : 'img/rhino_lift_eat_1.png',
	[RHINO_EAT_3] : 'img/rhino_lift_eat_2.png',
	[RHINO_EAT_4] : 'img/rhino_lift_eat_3.png',
	[RHINO_EAT_5] : 'img/rhino_lift_eat_4.png',
	[NONE] : 'img/clear.png'
};

export const JUMPABLE = [
    ROCK1,
    ROCK2,
    RAMP
];

export const SKIER_DIRECTIONS = {
    CRASH : 0,
    LEFT : 1,
    LEFT_DOWN : 2,
    DOWN : 3,
    RIGHT_DOWN : 4,
    RIGHT : 5,
};

export const SKIER_AIRTIME = {
  JUMP: .5,
  RAMP: .75
}

export const SKIER_DIRECTION_ASSET = {
    [SKIER_DIRECTIONS.CRASH] : SKIER_CRASH,
    [SKIER_DIRECTIONS.LEFT] : SKIER_LEFT,
    [SKIER_DIRECTIONS.LEFT_DOWN] : SKIER_LEFTDOWN,
    [SKIER_DIRECTIONS.DOWN] : SKIER_DOWN,
    [SKIER_DIRECTIONS.JUMP] : SKIER_JUMP,
    [SKIER_DIRECTIONS.RIGHT_DOWN] : SKIER_RIGHTDOWN,
    [SKIER_DIRECTIONS.RIGHT] : SKIER_RIGHT
};

export const RHINO_ACTION_ASSET = {
	[RHINO_DEFAULT] : RHINO_DEFAULT
};

export const RHINO_RUNNING_ASSETS = [
	RHINO_RUN_0,
	RHINO_RUN_1
];

export const RHINO_EATING_ASSETS = [
	RHINO_EAT_0,
	RHINO_EAT_1,
	RHINO_EAT_2,
	RHINO_EAT_3,
	RHINO_EAT_4,
	RHINO_EAT_5
];

export const KEYS = {
    LEFT : 37,
    RIGHT : 39,
    UP : 38,
    DOWN : 40,
    SPACE : 32,
	ESC : 27
};