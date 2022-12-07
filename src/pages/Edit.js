import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "../style/edit.css";

export default function Edit() {
  const param = useParams(); // mengembalikan objek
  const [judul, setJudul] = useState(""); //State berfungsi untuk menyimpan data sementara
  const [deskripsi, setDeskripsi] = useState("");
  const [tahunTerbit, setTahunTerbit] = useState("");
  const [pengarang, setPengarang] = useState("");

  const history = useHistory(); // akses ke instance riwayat yang dapat Anda gunakan untuk bernavigasi.

  useEffect(() => {
    // mengambil data, memperbarui DOM secara langsung
    axios
      .get(" http://localhost:8000/daftarBuku/" + param.id)
      .then((response) => {
        const newBook = response.data;
        setJudul(newBook.judul);
        setDeskripsi(newBook.deskripsi);
        setTahunTerbit(newBook.tahunTerbit);
        setPengarang(newBook.pengarang);
      })
      .catch((error) => {
        alert("Terjadi kesalahan Lurr!!! " + error);
      });
  }, []);

  const submitActionHalder = async (event) => {
    //untuk mengeksekusi setiap kali event dipicu.
    event.preventDefault();

    await Swal.fire({
      title: "Yakin Ingin menghapus data ini?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, edit it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios.put("http://localhost:8000/daftarBuku/" + param.id, {
            judul: judul,
            deskripsi: deskripsi,
            tahunTerbit: tahunTerbit,
            pengarang: pengarang,
          });
          Swal.fire("Edit !", "Your file has been edit.", "success");
        }
      })
      .then(() => {
        history.push("/"); // untuk menge push data setelah di edit
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        // => untuk mengetahui jika terjadi error
        alert("Terjadinya kesalahan: " + error);
      });
  };
  return (
    <div className="edit mx-5">
      <div className="container my-5">
        <Form onSubmit={submitActionHalder}>
          <h2>Update Data :</h2>
          <hr />
          <div className="name mb-3">
            <Form.Label>
              <strong>Judul</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
              <Form.Control
                placeholder="Judul"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="name mb-3">
            <Form.Label>
              <strong>Deskripsi</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
              <Form.Control
                placeholder="Deskripsi"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="name mb-3">
            <Form.Label>
              <strong>Pengarang</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
              <Form.Control
                placeholder="Pengarang"
                value={pengarang}
                onChange={(e) => setPengarang(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="name mb-3">
            <Form.Label>
              <strong>Tahun Terbit</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
              <Form.Control
                type="date"
                placeholder="Tahun Terbit"
                value={tahunTerbit}
                onChange={(e) => setTahunTerbit(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="d-flex justify-content-end align-items-center mt-2">
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
