package com.psl.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PipeController {

        @Value("${app.title}")
        private String title;

        @Value("${app.subtitle}")
        private String subtitle;

        @Value("${app.name}")
        private String name;

        @Value("${app.batch}")
        private String batch;

        @Value("${app.message}")
        private String message;

        @GetMapping("/")
        public String home(Model model) {
            model.addAttribute("title", title);
            model.addAttribute("subtitle", subtitle);
            model.addAttribute("name", name);
            model.addAttribute("batch", batch);
            model.addAttribute("message", message);
            return "index";
        }
    }

