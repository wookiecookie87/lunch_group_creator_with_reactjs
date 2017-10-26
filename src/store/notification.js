export const errorNofied = () => {
	return {
		type : 'ERROR_NOTIFIED'
	}
}

export const notifyError = (err, param) => (dispatch) => {
  switch(err) {
    case 11000 : 
      alert("You cannot add existing name.");
      return dispatch(errorNofied());

    case 'EXCEED_MIN' : 
      alert("Groups cannot be created. Possible mininum number for a group is "+param);
      return dispatch(errorNofied());
      
    case 'EXCEED_MEBERS' : 
      alert("Groups cannot be created. Number for groups exceeds number of members");
      return dispatch(errorNofied());
          
    default :
      return dispatch;
  }
}