document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('webcam');
    const scanButton = document.getElementById('scanButton');
    const scanStatus = document.getElementById('scanStatus');

    // 1. Mengakses kamera pengguna
    async function startWebcam() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            scanStatus.textContent = "Kamera siap. Klik tombol untuk scan.";
        } catch (err) {
            console.error("Error mengakses kamera: ", err);
            scanStatus.textContent = "Gagal mengakses kamera. Mohon izinkan akses kamera di browser Anda.";
            scanStatus.style.color = 'red';
        }
    }

    // 2. Event listener untuk tombol scan
    scanButton.addEventListener('click', () => {
        scanStatus.textContent = "Menganalisis wajah...";
        scanButton.disabled = true; // Nonaktifkan tombol selama proses scan

        // 3. Simulasi proses verifikasi (berlangsung 3 detik)
        setTimeout(() => {
            // Anggap verifikasi selalu berhasil untuk simulasi ini
            const waktuSekarang = new Date().toLocaleString('id-ID', {
                dateStyle: 'full',
                timeStyle: 'long'
            });
            
            // Data dummy hasil scan
            const dataVerifikasi = {
                id: 'SCAN-WAJAH-001',
                nama: 'Pengguna Terverifikasi',
                waktu: waktuSekarang
            };

            // Simpan data dan arahkan ke halaman sukses
            localStorage.setItem('verifikasiData', JSON.stringify(dataVerifikasi));
            window.location.href = 'sukses.html';

        }, 3000); // Penundaan 3 detik (3000 milidetik)
    });

    startWebcam();
});
