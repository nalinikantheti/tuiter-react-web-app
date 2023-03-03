import './index.css';

function Classes() {
    const color = 'blue';
    const dangerous = false;
    return (
        <div>
            <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
                Dynamic <i>'Blue'</i> background</div>
            <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                   wd-fg-black wd-padding-10px`}>
                Dangerous background</div>
        </div>


    )
};
export default Classes;