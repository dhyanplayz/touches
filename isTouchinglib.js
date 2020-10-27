function isTouching(ab1,ab2){
    if (ab1.x - ab2.x < ab2.width/2 + ab1.width/2
      && ab2.x - ab1.x < ab2.width/2 +ab1.width/2
      && ab1.y - ab2.y < ab2.height/2 + ab1.height/2
      && ab2.y - ab1.y < ab2.height/2 + ab1.height/2) {
    return true;
  }
  else {
    return false;
  }
  }
  