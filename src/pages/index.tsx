import Container from '@/app/components/general/containers/container';
import Body from '@/app/components/home/body';
import VideoContainer from '@/app/components/home/videoContainer';
import { useEffect, useMemo, useState } from 'react';

const Home = () => {
  const [mode, setMode] = useState('front');
  const [selectedMuscle, setSelectedMuscle] = useState('home');

  const frontText = mode === 'front' ? 'Frontal' : 'Trasera';

  const videoId = useMemo(() => {
    console.log(`fastlog => selectedMuscle:`, selectedMuscle);
    switch (selectedMuscle) {
      case 'abdominals':
        return 'wVib5FsxtMQ';
      case 'obliques':
        return '_0y0pV-ENLQ';
      case 'forearms':
        return '_0y0pV-ENLQ';
      case 'biceps':
        return '_0y0pV-ENLQ';
      case 'shoulders':
        return '_0y0pV-ENLQ';
      case 'traps':
        return '_0y0pV-ENLQ';
      case 'chest':
        return '_0y0pV-ENLQ';
      case 'quads':
        return '_0y0pV-ENLQ';
      case 'calves':
        return '_0y0pV-ENLQ';
      case 'hamstrings':
        return '_0y0pV-ENLQ';
      case 'lowerback':
        return '_0y0pV-ENLQ';
      case 'glutes':
        return '_0y0pV-ENLQ';
      case 'lats':
        return '_0y0pV-ENLQ';
      case 'traps_middle':
        return '_0y0pV-ENLQ';
      case 'triceps':
        return '_0y0pV-ENLQ';
      default:
        return 'JqAgNZcsj6Q';
    }
  }, [selectedMuscle]);

  return (
    <main>
      <Container>
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
            <div className="form-control w-52 z-50  -mb-10 mt-5">
              <label className="cursor-pointer label">
                <span className="label-text">Vista {frontText}</span>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={mode === 'back'}
                  onChange={() => {
                    setMode(mode === 'front' ? 'back' : 'front');
                  }}
                />
              </label>
            </div>

            <div className="h-screen py-32 -mb-32 -mt-24 z-0">
              <Body mode={mode} setSelectedMuscle={setSelectedMuscle} />
            </div>
          </div>
          <div className="divider divider-horizontal">-</div>
          <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
            <VideoContainer muscle={selectedMuscle} videoId={videoId} />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Home;
