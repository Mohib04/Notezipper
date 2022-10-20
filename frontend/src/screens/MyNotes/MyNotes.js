import React, { useState } from "react";
import MainComponent from "../../components/MainComponent/MainComponent";
import { Badge, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <MainComponent title="Welcome to SRD Limited">
        <Link to="createnote">
          <Button
            variant="success"
            style={{ fontSize: 18, borderRadius: 2, marginBottom: 10 }}
          >
            Create New Blog
          </Button>
        </Link>
        {notes.map((note) => (
          <Accordion
            key={note._id}
            style={{ borderRadius: 2 }}
            defaultActiveKey="0"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h4>{note.title}</h4>
              </Accordion.Header>
              <Accordion.Body>
                <h5>
                  <Badge style={{ borderRadius: 2 }} bg="warning" text="dark">
                    Category: {note.category}
                  </Badge>
                </h5>
                <p>{note.content}</p>
                <Button
                  style={{ marginRight: 5, borderRadius: 2 }}
                  variant="success"
                >
                  Edit
                </Button>
                <Button style={{ borderRadius: 2 }} variant="danger">
                  Delete
                </Button>{" "}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </MainComponent>
    </div>
  );
};

export default MyNotes;
