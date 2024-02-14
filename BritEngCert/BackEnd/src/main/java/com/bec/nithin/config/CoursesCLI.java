package com.bec.nithin.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.bec.nithin.model.Course;
import com.bec.nithin.model.Enquiry;
import com.bec.nithin.repository.CourseRepository;
import com.bec.nithin.repository.EnquiryRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class CoursesCLI implements CommandLineRunner {
    private final CourseRepository courseRepository;
    private final EnquiryRepository enquiryRepository;
    @Override
    public void run(String... args) throws Exception {
        if (courseRepository.count() > 0) {
            return;
        }

        var enquiry= Enquiry.builder().description("abc").enquiryType("Yes").title("sedfgf").build();
        var course1 = Course.builder().courseName("Beginner Fundamentals")
                .description("Build a solid foundation in grammar, vocabulary, and pronunciation.")
                .duration("20Hrs")
                .cost(10000).build();

        var course2 = Course.builder().courseName("Intermediate Essentials")
                .description("Enhance your fluency and accuracy in daily communication.")
                .duration("25Hrs")
                .cost(20000).build();

        var course3 = Course.builder().courseName("Advanced Mastery")
                .description("Hone your skills for academic or professional success.")
                .duration("25Hrs")
                .cost(20000).build();

        var course4 = Course.builder().courseName("Business Communication")
                .description("Master English for presentations, meetings, and email writing.")
                .duration("25Hrs")
                .cost(20000).build();

        var course5 = Course.builder().courseName("Legal English")
                .description("Gain specialized vocabulary and grammar for legal documents and contracts.")
                .duration("25Hrs")
                .cost(20000).build();

        var course6 = Course.builder().courseName("Medical English")
                .description("Develop communication skills for medical fields.")
                .duration("25Hrs")
                .cost(20000).build();

        var course7 = Course.builder().courseName("IELTS Test Prep")
                .description("Confidently tackle the International English Language Testing System.")
                .duration("25Hrs")
                .cost(20000).build();

        var course8 = Course.builder().courseName("TOEFL iBT Exam Preparation")
                .description("Master the Test of English as a Foreign Language.")
                .duration("25Hrs")
                .cost(20000).build();

        var course9 = Course.builder().courseName("English For Travel")
                .description("Speak English confidently on your next adventure abroad.")
                .duration("25Hrs")
                .cost(20000).build();

        var course10 = Course.builder().courseName("English For Literature")
                .description("Dive deeper into the beauty and intricacies of English literature.")
                .duration("25Hrs")
                .cost(20000).build();

        var course11 = Course.builder().courseName("English for Creative Writing")
                .description("Unleash your storytelling potential in English.")
                .duration("25Hrs")
                .cost(20000).build();

        courseRepository.save(course1);
        courseRepository.save(course2);
        courseRepository.save(course3);
        courseRepository.save(course4);
        courseRepository.save(course5);
        courseRepository.save(course6);
        courseRepository.save(course7);
        courseRepository.save(course8);
        courseRepository.save(course9);
        courseRepository.save(course10);
        courseRepository.save(course11);
        enquiryRepository.save(enquiry);

    }
}
