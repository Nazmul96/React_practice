import withCounter from './withCounter';

const HoverCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <button type="button" onMouseOver={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    );
};

export default withCounter(HoverCounter);