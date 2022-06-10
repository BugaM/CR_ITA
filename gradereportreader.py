import PyPDF2
import pandas as pd

import utils

class GradeReportReader:
    """
    Reads ITA's grade report in pdf format.
    """
    def __init__(self, path) -> None:
        self.pdf = PyPDF2.PdfReader(path)
        self.report_lines = self.pdf.pages[0].extract_text().splitlines()
        self.grades = self.read_grades()
        self.course_credits = self.read_course_credits()
    
    def read_grades(self):
        """
        Reads the grades of each course in the pdf.
        """
        semesters = []
        courses = []
        grades = []
        passed_summary = False
        next_is_grades = False
        for i in range(len(self.report_lines)):
            if not passed_summary:
                if self.report_lines[i] == "RESUMO DO HISTÓRICO ESCOLAR - ":
                    passed_summary = True
            elif not next_is_grades:
                next_is_grades = True
                continue
            elif self.report_lines[i] == "M1 -> Média dos Bimestres":
                break
            elif self.report_lines[i]:
                    courses_info = self.report_lines[i].split()
                    for semester, course, grade in zip(courses_info[0::3], courses_info[1::3],
                                                       courses_info[2::3]):
                        try:
                            grades.append(utils.str_number_to_float(grade))
                            semesters.append(utils.get_semester(semester))
                            courses.append(course)
                        except:
                            continue
        return pd.DataFrame({"semester": semesters, "courses": courses, "grade": grades})
    
    def get_grades(self):
        """
        Getter for the grades
        """
        return self.grades

    def read_course_credits(self):
        """
        Reads the course credits to update the database.
        """
        courses = []
        credits = []
        got_to_courses = False
        for i in range(len(self.report_lines)):
            if not got_to_courses:
                got_to_courses = True if self.report_lines[i] == "HORÁRIA" else False
            elif self.report_lines[i] == "RESUMO DO HISTÓRICO ESCOLAR - ":
                break
            elif self.report_lines[i]:
                course_info = self.report_lines[i].split()
                try:
                    credits.append(utils.get_valid_credits(course_info[-1])) 
                    courses.append(course_info[0])
                except:
                    continue
        return pd.DataFrame({"sigla": courses, "creditos": credits, "nome": "", "curso": ""})

