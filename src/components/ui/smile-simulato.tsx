// src/app/smile-simulator/page.tsx
"use client";

import React, { useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Sparkles, Loader2, Camera as CameraIcon } from "lucide-react";

export default function SmileSimulator() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selfie, setSelfie] = useState<string | null>(null);
  const [transformed, setTransformed] = useState<string | null>(null);
  const [capturing, setCapturing] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ---- CAMERA ----
  const startCamera = useCallback(async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: 640, height: 480 },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setCapturing(true);
      }
    } catch {
      setError("Camera access denied. Please allow permission and reload.");
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (videoRef.current?.srcObject) {
      (videoRef.current.srcObject as MediaStream)
        .getTracks()
        .forEach((t) => t.stop());
      setCapturing(false);
    }
  }, []);

  // ---- CAPTURE ----
  const capture = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d")!;
    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;
    ctx.drawImage(videoRef.current, 0, 0);

    const dataUrl = canvasRef.current.toDataURL("image/png");
    setSelfie(dataUrl);
    stopCamera();
    transformPhoto(dataUrl);
  }, [stopCamera]);

  // ---- FAKE TRANSFORMATION (replace with real API) ----
  const transformPhoto = (src: string) => {
    setProcessing(true);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imageData.data;
      for (let i = 0; i < d.length; i += 4) {
        d[i] = Math.min(255, d[i] * 1.15);     // R
        d[i + 1] = Math.min(255, d[i + 1] * 1.1); // G
        d[i + 2] = Math.min(255, d[i + 2] * 1.3); // B (whiter)
      }
      ctx.putImageData(imageData, 0, 0);
      setTransformed(canvas.toDataURL("image/png"));
      setProcessing(false);
    };
    img.src = src;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-4">
      {/* Back */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => window.history.back()}
        className="absolute top-4 left-4"
      >
        <ArrowLeft className="w-5 h-5 mr-1" /> Back
      </Button>

      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center pb-4">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold">
            <Sparkles className="w-7 h-7 text-indigo-600 animate-pulse" />
            Smile Simulator
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Camera */}
          {!selfie ? (
            <>
              <p className="text-center text-gray-600 text-sm">
                Smile wide and natural — we’ll transform it in seconds!
              </p>

              {capturing ? (
                <div className="space-y-4">
                  <div className="relative">
                    <video
                      ref={videoRef}
                      className="w-full rounded-xl shadow-lg"
                      playsInline
                      autoPlay
                      muted
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-32 h-44 border-4 border-white border-dashed rounded-2xl opacity-50" />
                    </div>
                  </div>
                  <canvas ref={canvasRef} className="hidden" />
                  <Button onClick={capture} className="w-full" size="lg">
                    <CameraIcon className="w-5 h-5 mr-2" />
                    Capture & Transform
                  </Button>
                </div>
              ) : (
                <Button onClick={startCamera} className="w-full" size="lg">
                  <CameraIcon className="w-5 h-5 mr-2" />
                  Open Camera
                </Button>
              )}
            </>
          ) : (
            /* Before / After */
            <>
              <h3 className="text-center font-semibold text-lg">Before & After</h3>

              {processing ? (
                <div className="flex flex-col items-center space-y-3 py-8">
                  <Loader2 className="w-10 h-10 animate-spin text-indigo-600" />
                  <p className="text-sm text-gray-600">Applying Invisalign® magic…</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-center text-sm font-medium text-gray-700 mb-2">Original</p>
                    <img src={selfie} alt="Original" className="w-full rounded-lg shadow" />
                  </div>
                  <div>
                    <p className="text-center text-sm font-medium text-gray-700 mb-2">Transformed</p>
                    {transformed && (
                      <img
                        src={transformed}
                        alt="Transformed"
                        className="w-full rounded-lg shadow border-4 border-green-400"
                      />
                    )}
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelfie(null);
                    setTransformed(null);
                    setProcessing(false);
                    startCamera();
                  }}
                  className="flex-1"
                >
                  Try Again
                </Button>
                <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                  Book Consultation
                </Button>
              </div>
            </>
          )}

          {error && (
            <p className="text-red-600 text-center text-sm bg-red-50 p-3 rounded-lg">
              {error}
            </p>
          )}
        </CardContent>
      </Card>

      <p className="mt-6 text-xs text-center text-gray-500 max-w-xs">
        *Simulation for illustration only. Real results require a professional consultation.
      </p>

      {/* HTTPS warning */}
      {typeof window !== "undefined" && location.protocol === "http:" && (
        <p className="mt-4 text-xs text-red-600 text-center font-medium">
          Camera works only on HTTPS or localhost.
        </p>
      )}
    </div>
  );
}