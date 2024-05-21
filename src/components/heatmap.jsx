import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { subDays, format } from 'date-fns';

const LearningHeatmap = () => {
  const today = new Date();
  const endDate = today;
  const startDate = subDays(today, 365);

  const randomValues = [];
  for (let i = 0; i <= 365; i++) {
    randomValues.push({
      date: format(subDays(today, i), 'yyyy-MM-dd'),
      count: Math.floor(Math.random() * 5),
    });
  }

  return (
    <div className="p-5 border shadow-lg rounded-lg">
      <h2 className="text-lg mb-5">Your learning Heatmap throughout the year</h2>
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={randomValues}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-gitlab-${value.count}`;
        }}
        tooltipDataAttrs={(value) => {
          return {
            'data-tip': value.date
              ? `${value.date}: ${value.count} contributions`
              : 'No contributions',
          };
        }}
        
      />
    </div>
  );
};

export default LearningHeatmap;
