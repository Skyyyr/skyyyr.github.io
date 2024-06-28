import { ProgressBar, Tab, Tabs } from 'react-bootstrap';
import jsonData from '../data/roadmap.json'

function Roadmap() {
    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'green';
            case 'inprogress':
                return 'yellow';
            case 'notstarted':
                return 'red';
            default:
                return 'black';
        }
    };

    const calculateProgress = (chapterText) => {
        const total = chapterText.length;
        const completed = chapterText.filter(item => item.status === 'completed').length;
        const inprogress = chapterText.filter(item => item.status === 'inprogress').length;
        const notstarted = chapterText.filter(item => item.status === 'notstarted').length;

        const completedPercentage = (completed / total) * 100;
        const inprogressPercentage = (inprogress / total) * 100;
        const notstartedPercentage = (notstarted / total) * 100;

        // Round percentages
        let roundedCompleted = Math.round(completedPercentage);
        let roundedInProgress = Math.round(inprogressPercentage);
        let roundedNotStarted = Math.round(notstartedPercentage);

        // Calculate the total rounded percentage
        const totalRounded = roundedCompleted + roundedInProgress + roundedNotStarted;
        
        // Adjust percentages to ensure the total is 100%
        const diff = 100 - totalRounded;
        if (diff !== 0) {
            if (diff > 0) {
                if (roundedNotStarted > 0) roundedNotStarted += diff;
                else if (roundedInProgress > 0) roundedInProgress += diff;
                else roundedCompleted += diff;
            } else {
                if (roundedNotStarted + diff >= 0) roundedNotStarted += diff;
                else if (roundedInProgress + diff >= 0) roundedInProgress += diff;
                else roundedCompleted += diff;
            }
        }

        return {
            completed: roundedCompleted,
            inprogress: roundedInProgress,
            notstarted: roundedNotStarted
        };
    };

    return (
        <div className='text-black'>
            <h1>
                ROTF Roadmap
            </h1>
            <p>
                Below is our roadmap for each chapter.
            </p>
            <Tabs
                defaultActiveKey={jsonData[0].eventKey}
                id='uncontrolled-tab'
                className='mb-3'
            >
                {jsonData.map((chapter) => {
                    const progress = calculateProgress(chapter.chapterText);
                    return (
                        <Tab eventKey={chapter.eventKey} title={chapter.chapterTitle} key={chapter.eventKey}>
                            <h5>
                                {chapter.chapterTitleText}
                            </h5>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                {chapter.chapterText.map((item, index) => (
                                    <li key={index} style={{ color: getStatusColor(item.status) }}>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                            <ProgressBar>
                                {progress.completed > 0 && <ProgressBar animated striped variant="success" now={progress.completed} key={1} label="Completed" />}
                                {progress.inprogress > 0 && <ProgressBar animated striped variant="warning" now={progress.inprogress} key={2} label="In Progress" />}
                                {progress.notstarted > 0 && <ProgressBar animated striped variant="danger" now={progress.notstarted} key={3} label="Not Started" />}
                            </ProgressBar>
                        </Tab>
                    );
                })}
            </Tabs>
        </div>
    );
}

export default Roadmap;
