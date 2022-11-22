import appReducer, {initializeApp, initializedSuccess} from "./app-reducer";

let state;

beforeEach(() => {
    state = {
        initialized: false
    };
})

it('initialization status must be changed', () => {
    let action = initializedSuccess();

    let newState = appReducer(state, action);

    expect(newState.initialized).toBeTruthy();
});

it('success unfollow thunk', async () => {
    const thunk = initializeApp();
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, expect.any(Function));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, initializedSuccess());
});