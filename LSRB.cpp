#include <iostream>

using namespace std;

int main() {
  // Initialize variables
  bool atExit = false;
  int direction = 0; // 0: left, 1: straight, 2: right

  while (!atExit) {
    // Check if the robot can turn left
    if (canTurnLeft()) {
      direction = 0;
      turnLeft();
    }

    // Check if the robot can go straight
    else if (canGoStraight()) {
      direction = 1;
      goStraight();
    }

    // Check if the robot can turn right
    else if (canTurnRight()) {
      direction = 2;
      turnRight();
    }

    // If all other options are exhausted, turn back
    else {
      turnBack();
    }

    // Check if the robot is at the exit
    atExit = isAtExit();
  }

  // Retrace the path
  while (!atStart()) {
    if (direction == 0) {
      turnLeft();
    } else if (direction == 1) {
      goStraight();
    } else if (direction == 2) {
      turnRight();
    }

    // Update the direction based on the last movement
    if (canTurnLeft()) {
      direction = 0;
    } else if (canGoStraight()) {
      direction = 1;
    } else if (canTurnRight()) {
      direction = 2;
    }

    // Check if the robot is at the start
    atStart = isAtStart();
  }

  return 0;
}