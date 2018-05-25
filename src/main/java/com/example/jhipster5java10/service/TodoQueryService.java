package com.example.jhipster5java10.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.jhipster.service.QueryService;

import com.example.jhipster5java10.domain.Todo;
import com.example.jhipster5java10.domain.*; // for static metamodels
import com.example.jhipster5java10.repository.TodoRepository;
import com.example.jhipster5java10.service.dto.TodoCriteria;


/**
 * Service for executing complex queries for Todo entities in the database.
 * The main input is a {@link TodoCriteria} which gets converted to {@link Specification},
 * in a way that all the filters must apply.
 * It returns a {@link List} of {@link Todo} or a {@link Page} of {@link Todo} which fulfills the criteria.
 */
@Service
@Transactional(readOnly = true)
public class TodoQueryService extends QueryService<Todo> {

    private final Logger log = LoggerFactory.getLogger(TodoQueryService.class);

    private final TodoRepository todoRepository;

    public TodoQueryService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    /**
     * Return a {@link List} of {@link Todo} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public List<Todo> findByCriteria(TodoCriteria criteria) {
        log.debug("find by criteria : {}", criteria);
        final Specification<Todo> specification = createSpecification(criteria);
        return todoRepository.findAll(specification);
    }

    /**
     * Return a {@link Page} of {@link Todo} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @param page The page, which should be returned.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public Page<Todo> findByCriteria(TodoCriteria criteria, Pageable page) {
        log.debug("find by criteria : {}, page: {}", criteria, page);
        final Specification<Todo> specification = createSpecification(criteria);
        return todoRepository.findAll(specification, page);
    }

    /**
     * Function to convert TodoCriteria to a {@link Specification}
     */
    private Specification<Todo> createSpecification(TodoCriteria criteria) {
        Specification<Todo> specification = Specification.where(null);
        if (criteria != null) {
            if (criteria.getId() != null) {
                specification = specification.and(buildSpecification(criteria.getId(), Todo_.id));
            }
            if (criteria.getTitle() != null) {
                specification = specification.and(buildStringSpecification(criteria.getTitle(), Todo_.title));
            }
            if (criteria.getDescription() != null) {
                specification = specification.and(buildStringSpecification(criteria.getDescription(), Todo_.description));
            }
            if (criteria.getDueDate() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getDueDate(), Todo_.dueDate));
            }
        }
        return specification;
    }

}
