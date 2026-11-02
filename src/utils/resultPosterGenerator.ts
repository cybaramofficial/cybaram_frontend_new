// Canvas-based High-Resolution Result Poster Generator for CybAram Vilaiyaattu
// Generates a 1080x1350 (4:5 social media format) downloadable and shareable PNG poster

export interface PosterData {
  gameTitle: string;
  playerName?: string;
  score: number;
  maxScore: number;
  percentage: number;
  safeCount: number;
  totalCount: number;
  tierName: string;
  headline: string;
  takeaway: string;
}

export async function generateResultPosterBlob(data: PosterData): Promise<Blob> {
  return new Promise((resolve, reject) => {
    try {
      const width = 1080;
      const height = 1350;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        reject(new Error('Canvas 2D context not available'));
        return;
      }

      // 1. Crisp Canvas Background
      ctx.fillStyle = '#F6F8F6';
      ctx.fillRect(0, 0, width, height);

      // Subtle notebook lines texture
      ctx.strokeStyle = '#E8EEEA';
      ctx.lineWidth = 1.5;
      for (let y = 140; y < height - 120; y += 40) {
        ctx.beginPath();
        ctx.moveTo(60, y);
        ctx.lineTo(width - 60, y);
        ctx.stroke();
      }

      // Outer border
      ctx.strokeStyle = '#172B4D';
      ctx.lineWidth = 12;
      ctx.strokeRect(24, 24, width - 48, height - 48);

      // 2. Top Header Banner (Forest Green #123C35)
      ctx.fillStyle = '#123C35';
      ctx.fillRect(24, 24, width - 48, 140);

      // Gold accent line
      ctx.fillStyle = '#D8A84E';
      ctx.fillRect(24, 160, width - 48, 6);

      // Header Text
      ctx.fillStyle = '#FFF1C2';
      ctx.font = 'bold 22px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('CYBARAM VILAIYAATTU · DIGITAL SAFETY TRAINING', width / 2, 70);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 38px system-ui, -apple-system, sans-serif';
      ctx.fillText(data.gameTitle.toUpperCase(), width / 2, 120);

      // 3. Central Achievement Badge Card
      const cardX = 90;
      const cardY = 200;
      const cardW = width - 180;
      const cardH = 430;

      // Card Shadow
      ctx.fillStyle = 'rgba(23, 43, 77, 0.08)';
      ctx.beginPath();
      ctx.roundRect(cardX + 8, cardY + 8, cardW, cardH, 32);
      ctx.fill();

      // Card Fill
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.roundRect(cardX, cardY, cardW, cardH, 32);
      ctx.fill();
      ctx.strokeStyle = '#DCECE3';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Player Name Header
      if (data.playerName) {
        ctx.fillStyle = '#172B4D';
        ctx.font = 'bold 20px system-ui, -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`AWARDED TO: ${data.playerName.toUpperCase()}`, width / 2, 245);
      }

      // Circular Score Display
      const circleX = width / 2;
      const circleY = data.playerName ? 365 : 350;
      const circleR = 98;

      // Outer progress ring
      ctx.beginPath();
      ctx.arc(circleX, circleY, circleR + 8, 0, Math.PI * 2);
      ctx.fillStyle = '#E8F5EE';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(circleX, circleY, circleR, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.strokeStyle = '#123C35';
      ctx.lineWidth = 8;
      ctx.stroke();

      // Percentage and points
      ctx.fillStyle = '#123C35';
      ctx.font = 'bold 60px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${data.percentage}%`, circleX, circleY + 8);

      ctx.fillStyle = '#53615C';
      ctx.font = 'bold 18px system-ui, -apple-system, sans-serif';
      ctx.fillText(`${data.score} / ${data.maxScore} PTS`, circleX, circleY + 40);

      // Tier Badge Pill
      const tierPillY = data.playerName ? 495 : 485;
      ctx.fillStyle = '#FFF1C2';
      ctx.beginPath();
      ctx.roundRect(width / 2 - 180, tierPillY, 360, 48, 24);
      ctx.fill();
      ctx.strokeStyle = '#D8A84E';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = '#704214';
      ctx.font = 'bold 22px system-ui, -apple-system, sans-serif';
      ctx.fillText(`★ ${data.tierName.toUpperCase()} ★`, width / 2, tierPillY + 32);

      ctx.fillStyle = '#172B4D';
      ctx.font = 'bold 20px system-ui, -apple-system, sans-serif';
      ctx.fillText(
        `${data.safeCount} of ${data.totalCount} Scenarios Safely Navigated`,
        width / 2,
        tierPillY + 90
      );

      // 4. Cheerful Cartoon Mascot & Confetti
      const charY = 660;

      // Confetti sparkles
      const confettiColors = ['#123C35', '#D8A84E', '#10B981', '#E86C45', '#2E5C8A'];
      for (let i = 0; i < 28; i++) {
        const cx = 120 + ((i * 37) % (width - 240));
        const cy = charY + ((i * 29) % 200);
        ctx.fillStyle = confettiColors[i % confettiColors.length];
        ctx.beginPath();
        if (i % 2 === 0) {
          ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        } else {
          ctx.rect(cx - 5, cy - 5, 10, 10);
        }
        ctx.fill();
      }

      // Mascot Face (Smiling Priya / Cyber Guardian)
      const headX = width / 2;
      const headY = 750;

      // Hair
      ctx.fillStyle = '#1C1816';
      ctx.beginPath();
      ctx.arc(headX, headY - 10, 52, 0, Math.PI * 2);
      ctx.fill();

      // Face
      ctx.fillStyle = '#D49A6A';
      ctx.beginPath();
      ctx.arc(headX, headY, 44, 0, Math.PI * 2);
      ctx.fill();

      // Bindi
      ctx.fillStyle = '#8B0000';
      ctx.beginPath();
      ctx.arc(headX, headY - 18, 4, 0, Math.PI * 2);
      ctx.fill();

      // Eyes (Joyful arches)
      ctx.strokeStyle = '#1C1816';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.arc(headX - 18, headY - 2, 9, Math.PI, 0, false);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(headX + 18, headY - 2, 9, Math.PI, 0, false);
      ctx.stroke();

      // Blush
      ctx.fillStyle = 'rgba(248, 113, 113, 0.45)';
      ctx.beginPath();
      ctx.arc(headX - 25, headY + 12, 8, 0, Math.PI * 2);
      ctx.arc(headX + 25, headY + 12, 8, 0, Math.PI * 2);
      ctx.fill();

      // Big Smile
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(headX, headY + 10, 20, 0, Math.PI, false);
      ctx.fill();
      ctx.stroke();

      // Cheerful Arms
      ctx.strokeStyle = '#123C35';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(headX - 44, headY + 50);
      ctx.quadraticCurveTo(headX - 90, headY + 20, headX - 80, headY - 30);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(headX + 44, headY + 50);
      ctx.quadraticCurveTo(headX + 90, headY + 20, headX + 80, headY - 30);
      ctx.stroke();

      // Hands
      ctx.fillStyle = '#D49A6A';
      ctx.beginPath();
      ctx.arc(headX - 80, headY - 35, 14, 0, Math.PI * 2);
      ctx.arc(headX + 80, headY - 35, 14, 0, Math.PI * 2);
      ctx.fill();

      // 5. Digital Safety Habit Summary Card
      const lessonCardY = 880;
      ctx.fillStyle = '#E8F5EE';
      ctx.beginPath();
      ctx.roundRect(100, lessonCardY, width - 200, 230, 24);
      ctx.fill();
      ctx.strokeStyle = '#DCECE3';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = '#123C35';
      ctx.font = 'bold 22px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🛡️ KEY DIGITAL SAFETY HABIT', width / 2, lessonCardY + 45);

      ctx.fillStyle = '#172B4D';
      ctx.font = '500 22px system-ui, -apple-system, sans-serif';

      // Wrap takeaway text
      const words = data.takeaway.split(' ');
      let line = '';
      let textY = lessonCardY + 95;
      const maxWidth = width - 280;

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          ctx.fillText(line, width / 2, textY);
          line = words[n] + ' ';
          textY += 34;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, width / 2, textY);

      // 6. Bottom Verification Footer
      ctx.fillStyle = '#172B4D';
      ctx.fillRect(24, height - 120, width - 48, 96);

      ctx.fillStyle = '#FFF1C2';
      ctx.font = 'bold 20px system-ui, -apple-system, sans-serif';
      ctx.fillText('CYBARAM · PEOPLE-FIRST DIGITAL PROTECTION', width / 2, height - 70);

      ctx.fillStyle = '#DCECE3';
      ctx.font = '16px system-ui, -apple-system, sans-serif';
      ctx.fillText(
        `Practise real-world safety puzzles at cybaram.in/vilaiyaattu · Date: ${new Date().toLocaleDateString()}`,
        width / 2,
        height - 40
      );

      // Export canvas to blob
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to create poster image blob'));
          }
        },
        'image/png',
        0.95
      );
    } catch (err) {
      reject(err);
    }
  });
}
