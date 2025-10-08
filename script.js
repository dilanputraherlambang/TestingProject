// Menunggu hingga seluruh halaman HTML dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // Simulasi database siswa
    const databaseSiswa = {
        "SISWA01": { nama: "Mohamad Dilan" },
        "SISWA02": { nama: "Alfitra Dwanda" },
        "GURU01": { nama: "Samen Sasono" }
    };

    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        // Mencegah form mengirim data dan me-refresh halaman
        event.preventDefault(); 
        
        const usernameInput = document.getElementById('username').value.toUpperCase(); // Ambil nilai input dan ubah ke huruf besar
        
        // Langkah: "Apakah Identitas Valid?"
        if (databaseSiswa[usernameInput]) {
            // JIKA YA: Identitas valid
            
            // Langkah: "Catat Waktu Masuk"
            const waktuSekarang = new Date().toLocaleString('id-ID', {
                dateStyle: 'full',
                timeStyle: 'long'
            });
            
            const dataVerifikasi = {
                id: usernameInput,
                nama: databaseSiswa[usernameInput].nama,
                waktu: waktuSekarang
            };
            
            // Simpan data ke localStorage untuk bisa diakses di halaman sukses
            localStorage.setItem('verifikasiData', JSON.stringify(dataVerifikasi));
            
            // Arahkan ke halaman sukses
            window.location.href = 'sukses.html';

        } else {
            // JIKA TIDAK: Identitas tidak valid
            // Arahkan ke halaman gagal
            window.location.href = 'gagal.html';
        }
    });
});
