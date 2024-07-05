const menu = {
    _meal: '',
    _price: 0,
    set mealType(mealToCheck){
      if(typeof mealToCheck === 'string'){
        this._meal = mealToCheck;
      }
    },
    set priceType(priceToCheck) {
      if(typeof priceToCheck === 'number'){
        this._price = priceToCheck;
      }
    },
    get todaysSpecial (){
      if(this._meal && this._price){
        return `Today's Special is ${this._meal} for ${this._price}R$`
      }else{
        return 'Meal or price was not set correctly!'
      }
    }
  }
  menu.mealType = 'strogonoff';
  menu.priceType = 29;
  console.log(menu);
  console.log(menu.todaysSpecial);
  
  
  