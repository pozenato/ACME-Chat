const findUserSelected = (userID, users) => {
    const userSelected = users.filter(u => u.id === Number(userID));
    return userSelected[0];
}

export default findUserSelected;