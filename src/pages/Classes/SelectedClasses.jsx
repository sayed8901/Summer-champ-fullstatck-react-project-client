import { useSelectedClasses } from "../../hooks/useSelectedClasses";


const SelectedClasses = () => {
    const [selectedClasses, refetch] = useSelectedClasses();
    console.log(selectedClasses);

    return (
        <div>
            my selected classes.
        </div>
    );
};

export default SelectedClasses;