import { useState, useEffect } from 'react';

const CameraRecorder = () => {
    const [mediaStream, setMediaStream] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const enableCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                setMediaStream(stream);
            } catch (err) {
                setError(err.message || 'Failed to access camera.');
            }
        };

        enableCamera();

        // Cleanup function
        return () => {
            if (mediaStream) {
                mediaStream.getTracks().forEach((track) => track.stop());
            }
        };
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            {mediaStream && (
                <video
                    width="640"
                    height="480"
                    autoPlay
                    muted
                >
                    <source
                        src={window.URL.createObjectURL(mediaStream)}
                        type="video/mp4"
                    />
                </video>
            )}
        </div>
    );
};

export default CameraRecorder;
