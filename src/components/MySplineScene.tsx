import Spline from '@splinetool/react-spline';

const MySplineScene = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}> {/* Container for your Spline scene */}
      <Spline scene="https://prod.spline.design/BUIXudK3kohEqrIW/scene.splinecode" />
    </div>
  );
};

export default MySplineScene;