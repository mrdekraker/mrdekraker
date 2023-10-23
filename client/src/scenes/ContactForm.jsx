import React, { useState } from "react";
import { Container, TextField, Button, Typography, Grid } from "@mui/material";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Contact Me!
      </Typography>
      <form
        target="_blank"
        action={`https://formsubmit.co/mrdekraker@gmail.com`}
        method="POST"
        // onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fontStyle="italic"
              fullWidth
              label="Name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fontStyle="italic"
              fullWidth
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fontStyle="italic"
              fullWidth
              label="Message"
              name="message"
              type="text"
              autoComplete="off"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
