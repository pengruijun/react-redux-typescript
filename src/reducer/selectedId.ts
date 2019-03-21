
export  const selectedId = (state: number = -1, action: any) =>
{
    switch(action.type) {
        case "SELECT":
            return action.selectedId;
        case "LINK":
            return -1;
        default:
            return state;
    }
}